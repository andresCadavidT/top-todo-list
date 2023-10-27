import { projects } from "./projects";
import { aside } from "./aside"

const $dialogCreateProject = document.querySelector('#dialog');
const $btnCreateProject = document.createElement("button")
    $btnCreateProject.textContent = "+ New Project"
    $btnCreateProject.classList.add("btnCreateProject")
    $btnCreateProject.addEventListener("click", function(){
        $dialogCreateProject.showModal()
    })

const $divCreateProject = document.querySelector("#divCreateProject")
    $divCreateProject.appendChild($btnCreateProject)

const $cerrarDialog = document.querySelector('.cancel');
    $cerrarDialog.addEventListener('click', () => {
        $dialogCreateProject.close();
    });

const $acceptProject = document.querySelector(".create")
$acceptProject.addEventListener("click", function(event){
    event.preventDefault()
    const $nameNewProject = document.querySelector("#inputNameNewProject")
    projects.createProject($nameNewProject.value)
    $dialogCreateProject.close();
    $nameNewProject.value = ""
    projects.notifyObservers(aside, "notifyNewProject")
})

const $imgAvatar = document.querySelector("#avatar")

const $asideProjectList = document.querySelector("#asideProjectList")

export { $imgAvatar, $asideProjectList }