/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aside: () => (/* binding */ aside)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _generateSmallToDoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateSmallToDoCard */ "./src/generateSmallToDoCard.js");



const aside = (function(){
    const divAsideProjectList = document.querySelector("#asideProjectList")
    return {
        alert: function(){
            const listActualProjects = _createProject__WEBPACK_IMPORTED_MODULE_0__.projects.getMyProjects()
            while(divAsideProjectList.firstChild){divAsideProjectList.firstChild.remove()}
            listActualProjects.forEach((aProject) => {
                const p = document.createElement("p")
                p.classList.add("asideProjectName")
                p.textContent = aProject.name
                p.addEventListener("click", function(){
                    ;(0,_generateSmallToDoCard__WEBPACK_IMPORTED_MODULE_1__.generateSmallToDoCard)(aProject)
                })
                const btn = document.createElement("button")
                btn.classList.add("btnRemoveAsideProjectName")
                btn.textContent = "X"
                btn.addEventListener("click", function(){
                    const father = this.parentElement
                    father.remove()
                })
                const divP = document.createElement("div")
                divP.classList.add("divAsideProjectName")
                divP.appendChild(p)
                divP.appendChild(btn)
                divAsideProjectList.appendChild(divP)
            });
            console.log("Alert")
            // myProjects.forEach((aProject)=>{myAsideArray.push(aProject)})
        }
    }
})()




/***/ }),

/***/ "./src/buttonCreateProject.js":
/*!************************************!*\
  !*** ./src/buttonCreateProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonCreateProject: () => (/* binding */ buttonCreateProject)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");


    const buttonCreateProject = document.createElement("button")
    buttonCreateProject.textContent = "Create New Project"
    buttonCreateProject.addEventListener("click", function(){
        const name = prompt("name project") // PENDIENTE INTERFAZ
        const myNewproject = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)(name)
        _createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(myNewproject)
    })




/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
const projects = (function(){
    const myProjects = [];
    return {
        getMyProjects: function(){return myProjects},
        addProject: function(theProject){myProjects.push(theProject); projects.notifyObservers()},
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
            projects.notifyObservers()
        }
    }
})()

projects.projectObservers = [];
projects.addObserver = function(newOb){
    projects.projectObservers.push(newOb)
};
projects.removeObserver = function(obToRem){
    projects.projectObservers = projectObservers.filter(ob=>ob!==obToRem)
};
projects.notifyObservers = function(){
    projects.projectObservers.forEach((ob)=>{
        ob.alert()
    })
};

function createProject(name){
    return{
        name,
        toDos: [],
        getToDos: function(){return this.toDos},
        addToDo: function(title, description, dueDate, notes, priority, checkList = false){
            const newTodo = {title, description, dueDate, notes, priority, checkList}
            this.toDos.push(newTodo)},
        removeToDo: function(toDoToRemove){
            this.toDos = this.toDos.filter((aTodo)=>{aTodo !== toDoToRemove})
        }
    }
}













/***/ }),

/***/ "./src/generateSmallToDoCard.js":
/*!**************************************!*\
  !*** ./src/generateSmallToDoCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSmallToDoCard: () => (/* binding */ generateSmallToDoCard)
/* harmony export */ });

const generateSmallToDoCard = function(aProject){
    const sectionToDos = document.querySelector("#sectionToDos")
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
    sectionToDos.appendChild(divProjectAndToDo)
    divProjectAndToDo.appendChild(divProjectTitle)
    divProjectAndToDo.appendChild(divListToDos)
    divProjectTitle.appendChild(pProjectName)

    divProjectAndToDo.classList.add("divProjectAndToDo")
    divProjectTitle.classList.add("divProjectTitle")
    pProjectName.classList.add("pProjectName")
    divListToDos.classList.add("divListToDos")
    }






        // const pToDoName = document.createElement("p")
        // pToDoName.classList.add("pToDoName")
        // pToDoName.textContent = aProject.name

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/aside.js");
/* harmony import */ var _buttonCreateProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonCreateProject */ "./src/buttonCreateProject.js");





// Test manual de creacion de varios Projects
const theAside = _aside__WEBPACK_IMPORTED_MODULE_1__.aside
_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addObserver(theAside)

const btnCreateProject = _buttonCreateProject__WEBPACK_IMPORTED_MODULE_2__.buttonCreateProject

const divButtonCreateProject = document.querySelector("#divButtonCreateProject")
divButtonCreateProject.appendChild(btnCreateProject)

const myTestProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi")
const myTestProject2 = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi2")
const myTestProject3 = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi3")

_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(myTestProject)
_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(myTestProject2)
_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(myTestProject3)


myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", false )
myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", false )
myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", false )
myTestProject.addToDo("SomeToDoTitle", "someDesc", "PENDIENTEDueDate", "someNote", "MaxPriority", true )


const newProject4 = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("myNewProject4")
_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(newProject4)

console.log(_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.getMyProjects())



// myTestProject.addToDos("MyTestTodo", "SomeDesc", "dueDatePendiente", "someNote", "Urgent", false)
// myTestProject.removeToDos(myTestProject[0])




// test manual para verificar sujeto/obs

// projects.notifyObservers()



// Probar manualmente que funcione createProject
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map