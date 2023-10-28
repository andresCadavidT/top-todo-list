import { $asideProjectList } from "./consts-listeners";
import { projects } from "./projects";
import "./css/aside.css"
import { sectionToDos } from "./sectionToDos";


const aside = {
    notifyNewProject: function(){
        while ($asideProjectList.firstChild){$asideProjectList.firstChild.remove()}
        let myProjects = projects.getMyProjects()
        myProjects.forEach((theProject, index)=>{
            let boxName = document.createElement("div")
            boxName.classList.add("boxNameAside")
            boxName.innerText = theProject.name
            
            let btnRemoveProject = document.createElement("button")
            btnRemoveProject.className = "btnRemoveProject"
            btnRemoveProject.textContent = "🗑"
            btnRemoveProject.addEventListener("click", ()=>{
                projects.removeProject(theProject)
                projects.notifyObservers(aside, "notifyNewProject")
            })

            let boxAnAsideProject = document.createElement("div")
            boxAnAsideProject.className = "boxAnAsideProject"
            boxAnAsideProject.appendChild(boxName)
            boxAnAsideProject.addEventListener("click", ()=>{
                projects.notifyObservers(sectionToDos,"notifySectionToDos", myProjects[index])
            })

            let boxToTheBoxLol = document.createElement("div")
            boxToTheBoxLol.classList.add("boxToTheBoxLol")
            boxToTheBoxLol.appendChild(boxAnAsideProject)
            boxToTheBoxLol.appendChild(btnRemoveProject)

            $asideProjectList.appendChild(boxToTheBoxLol)
        })
    }
}

projects.addObserver(aside)
export { aside }



    // let myProjects = projects.getMyProjects()
    // myProjects.forEach((theProject)=>{
    //     theProject.name
    // })