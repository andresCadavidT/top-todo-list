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


console.log(_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.getMyProjects())

function aside(){
    return {
        alert: function(){
            console.log("Alert")
            // myProjects.forEach((aProject)=>{myAsideArray.push(aProject)})
        }
    }
}





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
        addProject: function(theProject){myProjects.push(theProject)},
        getMyProjects: function(){return myProjects},
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
        }
    }
})()

function createProject(name){
    return{
        name,
        toDos: [],
        removeToDos: function(toDoToRemove){
            this.toDos = this.toDos.filter((aTodo)=>{aTodo !== toDoToRemove})
        },
        addToDos: function(Title, description, dueDate, notes, priority, checkList = false){
            const newTodo = {Title, description, dueDate, notes, priority, checkList}
            this.toDos.push(newTodo)},
    }
}




// createProject.projectObservers = []

// createProject.addObserver = function(newOb){
//     createProject.projectObservers.push(newOb)
// }

// createProject.removeObserver = function(obToRem){
//     createProject.projectObservers = projectObservers.filter(ob=>ob!==obToRem)
// }

// createProject.notifyObservers = function(){
//     createProject.projectObservers.forEach((ob)=>{
//         ob.alert("some")
//     })
// }








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




// Test manual de creacion de varios Projects

const myTestProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi")
const myTestProject2 = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi2")
const myTestProject3 = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi3")

_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(myTestProject)
_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(myTestProject2)
_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(myTestProject3)


const newProject4 = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("myNewProject4")
_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(newProject4)

console.log(_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.getMyProjects())



// myTestProject.addToDos("MyTestTodo", "SomeDesc", "dueDatePendiente", "someNote", "Urgent", false)
// myTestProject.removeToDos(myTestProject[0])




// test manual para verificar sujeto/obs
// const theAside = aside()

// createProject.addObserver(theAside)
// createProject.notifyObservers()



// Probar manualmente que funcione createProject
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map