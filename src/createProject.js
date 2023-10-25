const projects = (function(){
    const myProjects = [];
    return {
        addProject: function(theProject){myProjects.push(theProject)},
        getMyProjects: function(){return myProjects},
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
        }
    }
})()

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




// createProject.projectObservers = []

// createProject.addObserver = function(newOb){
//     createProject.projectObservers.push(newOb)
// }

// createProject.removeObserver = function(obToRem){
//     createProject.projectObservers = projectObservers.filter(ob=>ob!==obToRem)
// }

// createProject.notifyObservers = function(){
//     createProject.projectObservers.forEach((ob)=>{
//         ob.alert("some")
//     })
// }

export { createProject, projects }




