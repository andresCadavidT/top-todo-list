import { $asideProjectList } from "./consts-listeners";
import { projects } from "./projects";

const aside = {
    notifyNewProject: function(){
        console.log("here")
        console.log($asideProjectList.firstChild )
        while ($asideProjectList.firstChild){$asideProjectList.firstChild.remove()}
        let myProjects = projects.getMyProjects()
        myProjects.forEach((theProject)=>{
            let boxName = document.createElement("div")
            boxName.classList.add("boxNameAside")
            boxName.innerText = theProject.name
            $asideProjectList.appendChild(boxName)
            console.log(theProject.name)
        })
    }
}

projects.addObserver(aside)
export { aside }



    // let myProjects = projects.getMyProjects()
    // myProjects.forEach((theProject)=>{
    //     theProject.name
    // })