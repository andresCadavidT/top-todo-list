import { projects } from "./createProject"

const aside = (function(){
    const divAsideProjectList = document.querySelector("#asideProjectList")
    return {
        alert: function(){
            const listActualProjects = projects.getMyProjects()
            listActualProjects.forEach((aProject) => {
                const p = document.createElement("p")
                p.classList.add("asideProjectName")
                p.textContent = aProject.name
                divAsideProjectList.appendChild(p)
            });
            console.log("Alert")
            // myProjects.forEach((aProject)=>{myAsideArray.push(aProject)})
        }
    }
})()

export {aside}

