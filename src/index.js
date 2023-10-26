import { projects } from "./projects";
import createBtn from "./createBtn";
import { eventListenerBtnCreateProject } from "./eventListeners";
import { divButtonCreateProject } from "./domSelectors";




const btnCreateProject = createBtn("Create New Project", "btnCreateProject")
divButtonCreateProject.appendChild(btnCreateProject)
eventListenerBtnCreateProject(btnCreateProject)

console.log(btnCreateProject)