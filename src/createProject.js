// propiedades = nombre
// recibe uno o mas To Do, como los escucha cuando se creen?

export default function createProject(theNameProject){
    const name = theNameProject
    let toDos = []
    let observers = []
    

    
    const addObserver = function(ob){
        observers.push(ob)
    }

    const removeObserver = function (obToRemove) {
        observers = observers.filter(ob => ob !== obToRemove);
    }

    const notifyObserver = function(){
        observers.forEach((obs)=>{
            obs.update(this)
        })
    }

    const getName = function(){
        return name
    }

    const getToDos = function(){
        return toDos
    }

    const addToDo = function(aToDo) {
        toDos.push(aToDo)
        notifyObserver(this)
    }

    const removeToDo = function(aToDo){
        toDos = toDos.filter(toDo => toDo !== aToDo)
        notifyObserver(this)
    }

    return {getName, getToDos, addToDo, removeToDo, addObserver, removeObserver, notifyObserver}
}




