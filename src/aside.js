import "./aside.css"
import {addToApp} from "./domManager"
import {myProjects} from "./index.js"


export default function aside(){ 
    const divAside = document.createElement("div")
    divAside.classList.add("divAside")
    const divProjects = document.createElement("div")
    divProjects.classList.add("divProjects")
    divAside.appendChild(divProjects)
    addToApp(divAside)

    function update(aObject){
        const p = document.createElement("p")
        p.textContent = aObject.getName()
        const btnRemove = document.createElement("button")
        btnRemove.textContent = "X"
        btnRemove.classList.add("btnRemove")
        const divTheProject = document.createElement("div")
        divTheProject.classList.add("divTheProject")
        divTheProject.appendChild(p)
        divTheProject.appendChild(btnRemove)
        
        divProjects.appendChild(divTheProject)

    }
    return {update}
}

