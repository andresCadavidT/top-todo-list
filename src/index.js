import { createProject, projects } from "./createProject";
import { aside } from "./aside";


// Test manual de creacion de varios Projects
const theAside = aside
projects.addObserver(theAside)


const myTestProject = createProject("hi")
const myTestProject2 = createProject("hi2")
const myTestProject3 = createProject("hi3")

projects.addProject(myTestProject)
projects.addProject(myTestProject2)
projects.addProject(myTestProject3)


myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", false )
myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", false )
myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", false )
myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", true )


const newProject4 = createProject("myNewProject4")
projects.addProject(newProject4)

console.log(projects.getMyProjects())



// myTestProject.addToDos("MyTestTodo", "SomeDesc", "dueDatePendiente", "someNote", "Urgent", false)
// myTestProject.removeToDos(myTestProject[0])




// test manual para verificar sujeto/obs

// projects.notifyObservers()



// Probar manualmente que funcione createProject