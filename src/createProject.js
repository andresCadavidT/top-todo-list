import {myProjects, setMyProjects} from "./index"

function createProject(name){
    return {
        name, 
        toDos: [],
        removeProject: function(){
            let test = myProjects.filter(aProject=>aProject !== this)
            setMyProjects(test)
        },
        addToDos: function(Title, description, dueDate, notes, priority, checkList = false){
            const newTodo = {Title, description, dueDate, notes, priority, checkList}
            this.toDos.push(newTodo)},
        removeToDos: function(toDoToRemove){
            this.toDos = this.toDos.filter((aTodo)=>{aTodo !== toDoToRemove})
        }
    }
}

createProject.projectObservers = []

createProject.addObserver = function(newOb){
    projectObservers.push(newOb)
}

createProject.removeObserver = function(obToRem){
    projectObservers = projectObservers.filter(ob=>ob!==obToRem)
}

createProject.notifyObservers = function(){
    projectObservers.forEach((ob)=>{
        ob.alert("some")
    })
}

export {createProject}




