import { $asideProjectList } from "./consts-listeners";
import { projects } from "./projects";
import "./css/aside.css"


const aside = {
    notifyNewProject: function(){
        while ($asideProjectList.firstChild){$asideProjectList.firstChild.remove()}
        let myProjects = projects.getMyProjects()
        myProjects.forEach((theProject)=>{
            let boxName = document.createElement("div")
            boxName.classList.add("boxNameAside")
            boxName.innerText = theProject.name

            let btnRemoveProject = document.createElement("button")
            btnRemoveProject.className = "btnRemoveProject"
            btnRemoveProject.textContent = "X"
            btnRemoveProject.addEventListener("click", ()=>{
                projects.removeProject(theProject)
                projects.notifyObservers(aside, "notifyNewProject")
            })

            let boxAnAsideProject = document.createElement("div")
            boxAnAsideProject.className = "boxAnAsideProject"
            boxAnAsideProject.appendChild(boxName)
            boxAnAsideProject.appendChild(btnRemoveProject)

            $asideProjectList.appendChild(boxAnAsideProject)
        })
    }
}

projects.addObserver(aside)
export { aside }



    // let myProjects = projects.getMyProjects()
    // myProjects.forEach((theProject)=>{
    //     theProject.name
    // })