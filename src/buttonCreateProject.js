import { createProject, projects } from "./createProject"

    const buttonCreateProject = document.createElement("button")
    buttonCreateProject.textContent = "Create New Project"
    buttonCreateProject.addEventListener("click", function(){
        const name = prompt("name project") // PENDIENTE INTERFAZ
        const myNewproject = createProject(name)
        projects.addProject(myNewproject)
    })


export { buttonCreateProject }