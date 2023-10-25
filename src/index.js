import header from "./header"
import createProject from "./createProject"
import aside from "./aside"

const myHeader = header()
const myAside = aside()
const myProjects = []

myHeader.btnNewProject.addEventListener("click", ()=>{
    let tempNamePrompt = prompt("my project name: ")
    let project = createProject(tempNamePrompt) 
    project.addObserver(myAside)
    project.notifyObserver()
    myProjects.push(project)
    console.log(myProjects)
})


// make two example projects
const myProject1Test = createProject("Finish this ToDo List")
myProject1Test.addObserver(myAside)
myProject1Test.notifyObserver()
myProjects.push(myProject1Test)

const myProject2Test = createProject("MyHomeTasks")
myProject2Test.addObserver(myAside)
myProject2Test.notifyObserver()
myProjects.push(myProject2Test)
// end

console.log(myProjects)
console.log("Antes de Shift: " + myProjects)
myProjects.shift()
console.log("Despues de: " + myProjects)

export {myProjects}
