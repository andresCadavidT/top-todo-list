import { $asideProjectList } from "./consts-listeners";
import { projects } from "./projects";

const aside = {
    notifyNewProject: function(){
        console.log("hi im a new project on aside" )
    }
}

projects.addObserver(aside)
export { aside }



    // let myProjects = projects.getMyProjects()
    // myProjects.forEach((theProject)=>{
    //     theProject.name
    // })