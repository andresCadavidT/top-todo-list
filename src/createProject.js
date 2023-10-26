const projects = (function(){
    const myProjects = [];
    return {
        addProject: function(theProject){myProjects.push(theProject); projects.notifyObservers()},
        getMyProjects: function(){return myProjects},
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
            projects.notifyObservers()
        }
    }
})()

projects.projectObservers = [];
projects.addObserver = function(newOb){
    projects.projectObservers.push(newOb)
};
projects.removeObserver = function(obToRem){
    projects.projectObservers = projectObservers.filter(ob=>ob!==obToRem)
};
projects.notifyObservers = function(){
    projects.projectObservers.forEach((ob)=>{
        ob.alert()
    })
};

function createProject(name){
    return{
        name,
        toDos: [],
        removeToDos: function(toDoToRemove){
            this.toDos = this.toDos.filter((aTodo)=>{aTodo !== toDoToRemove})
        },
        addToDos: function(Title, description, dueDate, notes, priority, checkList = false){
            const newTodo = {Title, description, dueDate, notes, priority, checkList}
            this.toDos.push(newTodo)},
    }
}

export { createProject, projects }









