import { projects } from "./createProject"
import { generateSmallToDoCard } from "./generateSmallToDoCard"

const aside = (function(){
    const divAsideProjectList = document.querySelector("#asideProjectList")
    return {
        alert: function(){
            const listActualProjects = projects.getMyProjects()
            while(divAsideProjectList.firstChild){divAsideProjectList.firstChild.remove()}
            listActualProjects.forEach((aProject) => {
                const p = document.createElement("p")
                p.classList.add("asideProjectName")
                p.textContent = aProject.name
                p.addEventListener("click", function(){
                    generateSmallToDoCard(aProject)
                })
                const btn = document.createElement("button")
                btn.classList.add("btnRemoveAsideProjectName")
                btn.textContent = "X"
                btn.addEventListener("click", function(){
                    const father = this.parentElement
                    father.remove()
                })
                const divP = document.createElement("div")
                divP.classList.add("divAsideProjectName")
                divP.appendChild(p)
                divP.appendChild(btn)
                divAsideProjectList.appendChild(divP)
            });
            console.log("Alert")
            // myProjects.forEach((aProject)=>{myAsideArray.push(aProject)})
        }
    }
})()

export {aside}

