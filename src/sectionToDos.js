import { $sectionToDos } from "./consts-listeners"
import { projects } from "./projects"
import "./css/sectionToDos.css"


const sectionToDos = {
    notifySectionToDos: function(aProject){
        while($sectionToDos.firstChild){$sectionToDos.firstChild.remove()}
        
        let boxMainToDo = document.createElement("div")
        boxMainToDo.className = "boxMainToDo"

        let boxProjectName = document.createElement("div")
        boxProjectName.className = "boxProjectName"
        boxProjectName.innerText = aProject.name

        let boxToDosList = document.createElement("div")
        boxToDosList.className = "boxToDosList"

        let buttonNewToDo = document.createElement("button")
        buttonNewToDo.className = "buttonNewToDo"
        buttonNewToDo.textContent = "+ New ToDo"
        buttonNewToDo.addEventListener("click", function(){
            console.log("hi")
            aProject.addToDo(prompt("NameTask"))
            projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
        })
        let myToDos = aProject.getToDos()
        myToDos.forEach((aToDo)=>{
            let checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            let pName = document.createElement("div")
            pName.className = "pName"
            pName.textContent = aToDo.title

            let boxMyToDo = document.createElement("div")
            boxMyToDo.className = "boxMyToDo"
            boxMyToDo.appendChild(pName)
            boxMyToDo.appendChild(checkBox)

            boxToDosList.appendChild(boxMyToDo)
        })


        
        boxMainToDo.appendChild(boxProjectName)
        boxMainToDo.appendChild(boxToDosList)
        boxMainToDo.appendChild(buttonNewToDo)

        $sectionToDos.appendChild(boxMainToDo)
    },
}

projects.addObserver(sectionToDos)

export { sectionToDos }    