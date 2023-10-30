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

const $nameNewProject = document.querySelector("#inputNameNewProject")

const $acceptProject = document.querySelector(".create")

$acceptProject.addEventListener("click", function(event){
    projects.createProject($nameNewProject.value)
    $dialogCreateProject.close();
    $nameNewProject.value = ""
    projects.notifyObservers(aside, "notifyNewProject")
})

$nameNewProject.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault()
        projects.createProject($nameNewProject.value)
        $dialogCreateProject.close();
        $nameNewProject.value = ""
        projects.notifyObservers(aside, "notifyNewProject")
    }
})

const $imgAvatar = document.querySelector("#avatar")

const $asideProjectList = document.querySelector("#asideProjectList")

const $sectionToDos = document.querySelector("#sectionToDos")

const $cancelToDo = document.querySelector(".cancelToDo")
$cancelToDo.addEventListener("click", function(){
    const dialogToDo = document.querySelector("#dialogNewTodo")
    dialogToDo.close()
})


export { $imgAvatar, $asideProjectList, $sectionToDos }