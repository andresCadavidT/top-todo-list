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
        buttonNewToDo.addEventListener("click",function(){
            const $dialogNewTodo = document.querySelector("#dialogNewTodo")
            $dialogNewTodo.showModal()

            const boxCreateToDo = document.querySelector(".boxCreateToDo")
            while(boxCreateToDo.firstChild){boxCreateToDo.firstChild.remove()}

            const createToDo = document.createElement("button")
            createToDo.className = "createToDo"
            createToDo.textContent = "Create To Do"
            boxCreateToDo.appendChild(createToDo)

            createToDo.addEventListener("click", function(event){
                event.preventDefault()
                const inputNameNewToDo = document.querySelector("#inputNameNewToDo")
                const inputPriority = document.querySelector(".inputPriority")
                const inputDescriptionNewToDo = document.querySelector("#inputDescriptionNewToDo")

                aProject.addToDo(inputNameNewToDo.value, false, inputPriority.value, inputDescriptionNewToDo.value)
                inputNameNewToDo.value = ""
                inputPriority.value = ""
                inputDescriptionNewToDo.value = ""
                $dialogNewTodo.close()
                projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
            })
        })

        const myToDos = aProject.getToDos()
        const btnClearCheckedToDos = document.createElement("button")
        btnClearCheckedToDos.textContent = "Clear done task"
        btnClearCheckedToDos.className = "btnClearCheckedToDos"
        btnClearCheckedToDos.addEventListener("click", function(){
            myToDos.forEach(aToDo => {
                if(aToDo.checked === true){
                aProject.removeToDo(aToDo)
                projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
                }
            });
        })

        myToDos.forEach((aToDo)=>{
            const boxPriority = document.createElement("div")
            boxPriority.className = "boxPriority"
            if(aToDo.priority == "high"){
                boxPriority.classList.add("pHigh")
                boxPriority.classList.remove("pMedium")
                boxPriority.classList.remove("pLow")
            }
            if(aToDo.priority == "medium"){
                boxPriority.classList.add("pMedium")
                boxPriority.classList.remove("pHigh")
                boxPriority.classList.remove("pLow")
            }
            if(aToDo.priority == "low"){
                boxPriority.classList.add("pLow")
                boxPriority.classList.remove("pHigh")
                boxPriority.classList.remove("pMedium")
            }
            
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
            boxMyToDo.appendChild(boxPriority)
            boxMyToDo.appendChild(pName)
            boxMyToDo.appendChild(checkBox)

            checkBox.addEventListener("click", function(){
                if(aToDo.checked == false){
                    pName.classList.add("checked")
                    boxPriority.classList.add("pDone")
                }
                if(aToDo.checked == true){
                    pName.classList.remove("checked")
                    boxPriority.classList.remove("pDone")
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