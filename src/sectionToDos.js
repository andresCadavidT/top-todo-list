import { $sectionToDos } from "./consts-listeners"
import { projects } from "./projects"
import "./css/sectionToDos.css"


const sectionToDos = {
    notifySectionToDos: function(aProject){
        while($sectionToDos.firstChild){$sectionToDos.firstChild.remove()}
        
        const boxMainToDo = document.createElement("div")
        boxMainToDo.className = "boxMainToDo"

        const boxProjectName = document.createElement("div")
        boxProjectName.className = "boxProjectName"
        boxProjectName.innerText = aProject.name

        const boxToDosList = document.createElement("div")
        boxToDosList.className = "boxToDosList"

        const buttonNewToDo = document.createElement("button")
        buttonNewToDo.className = "buttonNewToDo"
        buttonNewToDo.textContent = "+ New ToDo"
        buttonNewToDo.addEventListener("click", function(){
            aProject.addToDo(prompt("NameTask"))
            projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
        })

        const myToDos = aProject.getToDos()

        const btnClearCheckedToDos = document.createElement("button")
        btnClearCheckedToDos.textContent = "Clear done task"
        btnClearCheckedToDos.className = "btnClearCheckedToDos"
        btnClearCheckedToDos.addEventListener("click", function(){
            myToDos.forEach(aToDo => {
                if(aToDo.checked === true){
                console.log("ENTRE AL IF")
                aProject.removeToDo(aToDo)
                console.log(aProject.getToDos())
                projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
                }
            });
        })

        myToDos.forEach((aToDo)=>{
            const checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            checkBox.className = "checkBox"
            checkBox.checked = aToDo.checked

            const pName = document.createElement("div")
            pName.className = "pName"
            pName.textContent = aToDo.title
            if(aToDo.checked == true){pName.classList.add("checked")}
            if(aToDo.checked == false){pName.classList.remove("checked")}

            const boxMyToDo = document.createElement("div")
            boxMyToDo.className = "boxMyToDo"
            boxMyToDo.appendChild(pName)
            boxMyToDo.appendChild(checkBox)

            checkBox.addEventListener("click", function(){
                if(aToDo.checked == false){
                    pName.classList.add("checked")
                }
                if(aToDo.checked == true){
                    pName.classList.remove("checked")
                }
                if(checkBox.checked === true){
                    aToDo.checked = true
                } 
                if(checkBox.checked === false) {
                    aToDo.checked = false
                }
            })
            
            boxToDosList.appendChild(boxMyToDo)
        })

        boxMainToDo.appendChild(boxProjectName)
        const boxButtons = document.createElement("div")
        boxButtons.className = "boxButtons"
        boxButtons.appendChild(buttonNewToDo)
        boxButtons.appendChild(btnClearCheckedToDos)

        boxMainToDo.appendChild(boxButtons)
        boxMainToDo.appendChild(boxToDosList)
        
        $sectionToDos.appendChild(boxMainToDo)
    },
    clearSection: function(){
        if($sectionToDos.firstChild){$sectionToDos.firstChild.remove()}
    }
}

projects.addObserver(sectionToDos)

export { sectionToDos }    