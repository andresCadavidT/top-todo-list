import { addToApp } from "./domManager"
import "./header.css"
import avatar from "./img/avatar.jpg"
import createProject from "./createProject"

export default function header(){
    const divHeader = document.createElement("div")
        divHeader.classList.add("divHeader")
    const divImg = document.createElement("div")
        divImg.classList.add("divImg")
        const img = document.createElement("img")
        img.classList = "img"
        img.src = avatar
        divImg.appendChild(img)
    divHeader.appendChild(divImg)
    const btnNewProject = document.createElement("button")
        btnNewProject.classList.add("btnNewProject")
        btnNewProject.classList.add("btn")
        btnNewProject.textContent = "New Project"
        btnNewProject.addEventListener("click",()=>{
            console.log("Click on new Project")
            const tempProjectName = prompt("Name project:")
            const newProject = createProject(tempProjectName)
            newProject.addObserver(aside)
            return newProject
        })
    const btnNewToDo = document.createElement("button")
        btnNewToDo.classList.add("btnNewToDo")
        btnNewToDo.classList.add("btn")
        btnNewToDo.textContent = "New ToDo"
    divHeader.appendChild(btnNewProject)
    divHeader.appendChild(btnNewToDo)
    addToApp(divHeader)
    return {btnNewProject, btnNewToDo}
}
