import { $sectionToDos } from "./consts-listeners"
import { projects } from "./projects"
import "./css/sectionToDos.css"
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'


const $dialogNewTodo = document.querySelector("#dialogNewTodo")
const $boxCreateToDo = document.querySelector(".boxCreateToDo")
const $inputNameNewToDo = document.querySelector("#inputNameNewToDo")
const $inputDescriptionNewToDo = document.querySelector("#inputDescriptionNewToDo")
const $inputPriority = document.querySelector(".inputPriority")
const $inputDueDateNewToDo = document.querySelector("#inputDueDateNewToDo")



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

        
        // BTN NEW TO DO
        const buttonNewToDo = document.createElement("button")
        buttonNewToDo.className = "buttonNewToDo"
        buttonNewToDo.textContent = "+ New ToDo"
        buttonNewToDo.addEventListener("click",function(){

            $dialogNewTodo.showModal()
            $inputNameNewToDo.value = ""
            $inputDescriptionNewToDo.value = ""
            $inputPriority.value = ""
            $inputDueDateNewToDo.value = ""

            while($boxCreateToDo.firstChild){$boxCreateToDo.firstChild.remove()}

            const createToDo = document.createElement("button")
            createToDo.className = "createToDo"
            createToDo.textContent = "Create To Do"
            $boxCreateToDo.appendChild(createToDo)

            createToDo.addEventListener("click", function(event){
                event.preventDefault()

                aProject.addToDo($inputNameNewToDo.value, false, $inputPriority.value, $inputDescriptionNewToDo.value, $inputDueDateNewToDo.value)
                $inputNameNewToDo.value = ""
                $inputPriority.value = ""
                $inputDescriptionNewToDo.value = ""
                $inputDueDateNewToDo.value = ""
                $dialogNewTodo.close()
                projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
            })
        })

        const myToDos = aProject.getToDos()

    


        // BTN clear
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

            if(aToDo.checked == true){boxPriority.classList.add("pDone")}
            if(aToDo.checked == false){boxPriority.classList.remove("pDone")}

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
            
    // DUE DATE
    const boxDate = document.createElement("div")
    let aNowDate = new Date()
    let aToDoDate = new Date(aToDo.date)
    if(aToDoDate >= aNowDate){
        boxDate.innerText ="Have: " + formatDistanceToNowStrict(new Date(aToDo.date))
        boxDate.className = "boxDate"
    }

            const checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            checkBox.className = "checkBox"
            checkBox.checked = aToDo.checked

            checkBox.addEventListener("click", function(){
                if(aToDo.checked == false){
                    pName.classList.add("checked")
                    boxPriority.classList.add("pDone")
                    boxDate.classList.add("checked")
                }
                if(aToDo.checked == true){
                    pName.classList.remove("checked")
                    boxPriority.classList.remove("pDone")
                    boxDate.classList.remove("checked")
                }
                if(checkBox.checked === true){
                    aToDo.checked = true
                } 
                if(checkBox.checked === false) {
                    aToDo.checked = false
                }
            })

            const pName = document.createElement("div")
            pName.className = "pName"
            pName.textContent = aToDo.title
            if(aToDo.checked == true){
                pName.classList.add("checked")
                boxDate.classList.add("checked")
            }
            if(aToDo.checked == false){
                pName.classList.remove("checked")
                boxDate.classList.remove("checked")
            }

            // EDIT LOGC
            pName.addEventListener("click", function(){
                $dialogNewTodo.showModal()
                while($boxCreateToDo.firstChild){$boxCreateToDo.firstChild.remove()}
                const btnEditToDo = document.createElement("button")
                btnEditToDo.className = "btnEditToDo"
                btnEditToDo.textContent = "Edit To Do"
                $boxCreateToDo.appendChild(btnEditToDo)

                // llama los valores actuales 
                $inputNameNewToDo.value = aToDo.title
                $inputDescriptionNewToDo.value = aToDo.description
                $inputPriority.value = aToDo.priority
                $inputDueDateNewToDo.value = aToDo.date 

                btnEditToDo.addEventListener("click", function(){
                    // los cambia por los nuevos
                    aToDo.title = $inputNameNewToDo.value
                    aToDo.description = $inputDescriptionNewToDo.value
                    aToDo.priority = $inputPriority.value
                    aToDo.date = $inputDueDateNewToDo.value

                    projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
                    $dialogNewTodo.close()
                    // limpia los cambios del form
                    $inputNameNewToDo.value = ""
                    $inputDescriptionNewToDo.value = ""
                    $inputPriority.value = ""
                    $inputDueDateNewToDo.value = ""
                })
            })


            
            const boxMyToDo = document.createElement("div")
            boxMyToDo.className = "boxMyToDo"
            boxMyToDo.appendChild(boxPriority)
            boxMyToDo.appendChild(pName)
            boxMyToDo.appendChild(boxDate)
            boxMyToDo.appendChild(checkBox)

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