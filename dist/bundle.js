/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createBtn.js":
/*!**************************!*\
  !*** ./src/createBtn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBtn)
/* harmony export */ });
function createBtn(buttonName, className){
    const button = document.createElement("button")
    button.textContent = buttonName
    button.classList.add(className)
    return button
}



/***/ }),

/***/ "./src/domSelectors.js":
/*!*****************************!*\
  !*** ./src/domSelectors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   divButtonCreateProject: () => (/* binding */ divButtonCreateProject)
/* harmony export */ });
const divButtonCreateProject = document.querySelector("#divButtonCreateProject")





/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventListenerBtnCreateProject: () => (/* binding */ eventListenerBtnCreateProject)
/* harmony export */ });
function eventListenerBtnCreateProject(someObj){
    someObj.addEventListener("click", function(){
        console.log("Click")
    })
}






/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
const projects = (function(){
    const myProjects = [];
    const observers = [];
    return {
        getMyProjects: function(){return myProjects},
        addProject: function(theProject){myProjects.push(theProject); projects.notifyObservers()},
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
            projects.notifyObservers()
        },
        addObserver: function(newOb){
            projects.observers.push(newOb)
        },
        removeObserver: function(obToRem){
            projects.observers = observers.filter(ob=>ob!==obToRem)
        },
        notifyObservers: function(varName){
            projects.observers.forEach((ob)=>{
                ob.varName
            })
        },
        createProject: function(name){
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
    }
})()












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
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _createBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBtn */ "./src/createBtn.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _domSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domSelectors */ "./src/domSelectors.js");








const btnCreateProject = (0,_createBtn__WEBPACK_IMPORTED_MODULE_1__["default"])("Create New Project", "btnCreateProject")
_domSelectors__WEBPACK_IMPORTED_MODULE_3__.divButtonCreateProject.appendChild(btnCreateProject)
;(0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.eventListenerBtnCreateProject)(btnCreateProject)

console.log(btnCreateProject)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map