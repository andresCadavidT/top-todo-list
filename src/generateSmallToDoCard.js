
const generateSmallToDoCard = function(aProject){
        const divProjectAndToDo = document.createElement("div")
            const divProjectTitle = document.createElement("div")
                const pProjectName = document.createElement("p")
                pProjectName.textContent = aProject.name    
            const divListToDos = document.createElement("div")
                const myActualToDos = aProject.getToDos()
                myActualToDos.forEach((aToDo)=>{
                    const divToDo = document.createElement("div")
                        const divTitle = document.createElement("div")
                            const pTitle = document.createElement("p")
                            pTitle.textContent = aToDo.title
                            divTitle.appendChild(pTitle)
                        const checkListBtn = document.createElement("input")
                            checkListBtn.type = "checkbox"
                            checkListBtn.checked = aToDo.checkList
                            checkListBtn.addEventListener("click", function(){
                                if (checkListBtn.checked == true) {
                                    divToDo.classList.add("divToDoChecked")
                                    divToDo.classList.remove("divToDoUnChecked")
                                }
                                if (checkListBtn.checked == false){
                                    divToDo.classList.remove("divToDoChecked")
                                    divToDo.classList.add("divToDoUnChecked")
                                }
                            })
                        const divDueDate = document.createElement("div")
                            divDueDate.style.height = "20px"
                            divDueDate.style.width = "20px"
                            divDueDate.style.backgroundColor= "black"
                        divToDo.appendChild(divTitle)
                        divToDo.appendChild(divDueDate)
                        divToDo.appendChild(checkListBtn)
                        divListToDos.appendChild(divToDo)
                })
    divProjectAndToDo.appendChild(divProjectTitle)
    divProjectAndToDo.appendChild(divListToDos)
    divProjectTitle.appendChild(pProjectName)

    divProjectAndToDo.classList.add("divProjectAndToDo")
    divProjectTitle.classList.add("divProjectTitle")
    pProjectName.classList.add("pProjectName")
    divListToDos.classList.add("divListToDos")

    return divProjectAndToDo
    }




export { generateSmallToDoCard }

        // const pToDoName = document.createElement("p")
        // pToDoName.classList.add("pToDoName")
        // pToDoName.textContent = aProject.name