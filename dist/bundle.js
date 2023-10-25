/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function createProject(name){
    return {
        name, 
        toDos: [],
        removeProject: function(){
            let test = _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.filter(aProject=>aProject !== this)
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setMyProjects)(test)
        },
        addToDos: function(Title, description, dueDate, notes, priority, checkList = false){
            const newTodo = {Title, description, dueDate, notes, priority, checkList}
            this.toDos.push(newTodo)},
        removeToDos: function(toDoToRemove){
            this.toDos = this.toDos.filter((aTodo)=>{aTodo !== toDoToRemove})
        }
    }
}

createProject.projectObservers = []

createProject.addObserver = function(newOb){
    projectObservers.push(newOb)
}

createProject.removeObserver = function(obToRem){
    projectObservers = projectObservers.filter(ob=>ob!==obToRem)
}

createProject.notifyObservers = function(){
    projectObservers.forEach((ob)=>{
        ob.alert("some")
    })
}








/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myProjects: () => (/* binding */ myProjects),
/* harmony export */   setMyProjects: () => (/* binding */ setMyProjects)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");


let myProjects = []

function setMyProjects(newValue) {
    myProjects = newValue
}


// Probar manualmente que funcione createProject
let myTestProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi")
let myTestProject2 = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)("hi2")

myProjects.push(myTestProject)
myProjects.push(myTestProject2)

myTestProject.addToDos("MyTestTodo", "SomeDesc", "dueDatePendiente", "someNote", "Urgent", false)
myTestProject.removeToDos(myTestProject[0])
myTestProject.removeProject()
console.log(myProjects)

// test manual para verificar sujeto/obs




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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map