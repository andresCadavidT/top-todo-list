import { projects } from "./projects";
import "./consts-listeners"
import "./$insert"
import {aside} from "./aside"
import { sectionToDos } from "./sectionToDos"
// css
import "./css/dialogCreateProject.css"
import "./css/index.css"
import  "./css/sectionToDos.css"


projects.createProject("myFirstTestProject")
projects.notifyObservers(aside, "notifyNewProject")
projects.createProject("AnotherProject")
projects.notifyObservers(aside, "notifyNewProject")


// Agregar manualmente ToDO y notificar sectionToDos
let myProjects = projects.getMyProjects()
myProjects[0].addToDo("aRandomTask")
console.log(myProjects)
console.log(myProjects[0])
console.log(myProjects[0].toDos[0].title)
// projects.notifyObservers(sectionToDos, "notifyListToDos", myProjects[0])





