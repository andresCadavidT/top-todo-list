const projects = (function(){
    const myProjects = [];
    const observers = [];
    return {
        getMyProjects: function(){return myProjects},
        addProject: function(theProject){
            myProjects.push(theProject);
        },
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
        },
        addObserver: function(newOb){
            observers.push(newOb)
            console.log("observer add")
        },
        removeObserver: function(obToRem){
            observers = observers.filter(ob=>ob!==obToRem)
        },        
        notifyObservers: function(observer, varName, arg){
            observers.forEach((obs)=>{
                if(obs == observer){obs[varName](arg); console.log("notify")}
            })
        },
        createProject: function(name){
            const newProject = {
                name,
                toDos: [],
                getToDos: function(){return this.toDos},
                addToDo: function(title ){
                    //, description, dueDate, notes, priority, checkList = false
                    const newTodo = {title}
                    //, description, dueDate, notes, priority, checkList
                    this.toDos.push(newTodo)
                },
                removeToDo: function(toDoToRemove){
                    this.toDos = this.toDos.filter((aTodo)=>{aTodo !== toDoToRemove})
                }
            }
            projects.addProject(newProject)
            return newProject
        }
    }
})()

export { projects }








