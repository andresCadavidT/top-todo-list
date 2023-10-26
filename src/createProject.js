const projects = (function(){
    const myProjects = [];
    return {
        getMyProjects: function(){return myProjects},
        addProject: function(theProject){myProjects.push(theProject); projects.notifyObservers()},
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
        getToDos: function(){return this.toDos},
        addToDo: function(title, description, dueDate, notes, priority, checkList = false){
            const newTodo = {title, description, dueDate, notes, priority, checkList}
            this.toDos.push(newTodo)},
        removeToDo: function(toDoToRemove){
            this.toDos = this.toDos.filter((aTodo)=>{aTodo !== toDoToRemove})
        }
    }
}

export { createProject, projects }









