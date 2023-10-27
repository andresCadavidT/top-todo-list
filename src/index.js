import { projects } from "./projects";
import "./consts-listeners"
import "./$insert"
import {aside} from "./aside"
// css
import "./css/dialogCreateProject.css"
import "./css/index.css"

projects.createProject("myFirstTestProject")
projects.notifyObservers(aside, "notifyNewProject")

projects.createProject("AnotherProject")
projects.notifyObservers(aside, "notifyNewProject")


// Temporal, para verificar cuantos projects existen. 
console.log(projects.getMyProjects())
