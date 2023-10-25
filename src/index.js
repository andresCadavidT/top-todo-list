import {createProject} from "./createProject";

let myProjects = []

function removeProject(projectToRemove){
    myProjects = myProjects.filter(aProject=>aProject !== projectToRemove)
}



// Probar manualmente que funcione createProject
let myTestProject = createProject("hi")
let myTestProject2 = createProject("hi2")

myProjects.push(myTestProject)
myProjects.push(myTestProject2)

myTestProject.addToDos("MyTestTodo", "SomeDesc", "dueDatePendiente", "someNote", "Urgent", false)
myTestProject.removeToDos(myTestProject[0])
console.log(myProjects)
removeProject(myTestProject)
console.log(myProjects)

// test manual para verificar sujeto/obs


export {myProjects, removeProject}