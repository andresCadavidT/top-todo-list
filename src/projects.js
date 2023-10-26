const projects = (function(){
    const myProjects = [];
    const observers = [];
    return {
        getMyProjects: function(){return myProjects},
        addProject: function(theProject){myProjects.push(theProject); projects.notifyObservers()},
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
            projects.notifyObservers()
        },
        addObserver: function(newOb){
            projects.observers.push(newOb)
        },
        removeObserver: function(obToRem){
            projects.observers = observers.filter(ob=>ob!==obToRem)
        },
        notifyObservers: function(varName){
            projects.observers.forEach((ob)=>{
                ob.varName
            })
        },
        createProject: function(name){
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
    }
})()
export { projects }









