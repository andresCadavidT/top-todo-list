/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/aside.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/aside.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.boxAnAsideProject{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    cursor: pointer;
    width:  150px;
    text-overflow:clip;
    color: var(--main-color);
}

.btnRemoveProject{
    background-color: var(--main-color);
    color: white;
    font-weight: 100;
    font-size: 0.8rem;
    border-radius: 2px;
    border: none;
    padding: 3px;
    cursor: pointer;
    height: 30px;
    width: 30px;
    font-size: 1.2rem;
}

.boxToTheBoxLol{
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
}


/*  aside  */

#aside{
    width: 200px;
    height: auto;
    border-right: 1px solid var(--main-color);
    grid-row: 2 / 3;
    display: flex;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
}

#asideProjectList{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

#divCreateProject{
    align-self: center;
    padding: 5px;
}


.btnCreateProject{
    background-color: var(--main-color);
    color: white;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid white;
}
`, "",{"version":3,"sources":["webpack://./src/css/aside.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA,YAAY;;AAEZ;IACI,YAAY;IACZ,YAAY;IACZ,yCAAyC;IACzC,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;IACI,mCAAmC;IACnC,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B","sourcesContent":[".boxAnAsideProject{\n    display: flex;\n    justify-content: space-between;\n    padding: 5px;\n    border: 2px solid var(--main-color);\n    border-radius: 5px;\n    cursor: pointer;\n    width:  150px;\n    text-overflow:clip;\n    color: var(--main-color);\n}\n\n.btnRemoveProject{\n    background-color: var(--main-color);\n    color: white;\n    font-weight: 100;\n    font-size: 0.8rem;\n    border-radius: 2px;\n    border: none;\n    padding: 3px;\n    cursor: pointer;\n    height: 30px;\n    width: 30px;\n    font-size: 1.2rem;\n}\n\n.boxToTheBoxLol{\n    display: flex;\n    gap: 5px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n/*  aside  */\n\n#aside{\n    width: 200px;\n    height: auto;\n    border-right: 1px solid var(--main-color);\n    grid-row: 2 / 3;\n    display: flex;\n    padding-top: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-bottom: 20px;\n}\n\n#asideProjectList{\n    width: 100%;\n    height: 60px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n#divCreateProject{\n    align-self: center;\n    padding: 5px;\n}\n\n\n.btnCreateProject{\n    background-color: var(--main-color);\n    color: white;\n    font-weight: 700;\n    padding: 5px 10px;\n    border-radius: 5px;\n    border: 1px solid white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/dialogCreateProject.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/dialogCreateProject.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    padding: 0px;
    margin: 0px;
}

#dialog{
    margin: 0 auto;
    margin-top: 200px;
    border: 1px solid white;
    border-radius: 10px;
}

#dialog::backdrop{
    opacity: 0.8;
    background-color: #3d0c11;
}

.formNewProject{
    width: 300px;
    height: 150px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 20px;
    box-shadow: 0px 0px 2px 1px #3d0c11 inset;
}

.addProject{
    font-size: 1.5rem;
    padding: 5px;
    background-color: #3d0c11;
    border: 1px solid #3D0C11;
    color: white;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: 20px;
}

label{
    font-size: 0.8rem;
    margin-left: 10px;
    color: #3d0c11;
}


.create{
    margin: 10px;
    padding: 5px 10px;
    color: white;
    background-color: #3D0C11;
    font-size: 0.8rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px; 

}

.cancel{
    margin: 10px;
    padding: 5px 10px;
    font-size: 0.8rem;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 140px; 
}`, "",{"version":3,"sources":["webpack://./src/css/dialogCreateProject.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;AAClB;;;AAGA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n}\n\n#dialog{\n    margin: 0 auto;\n    margin-top: 200px;\n    border: 1px solid white;\n    border-radius: 10px;\n}\n\n#dialog::backdrop{\n    opacity: 0.8;\n    background-color: #3d0c11;\n}\n\n.formNewProject{\n    width: 300px;\n    height: 150px;\n    border-radius: 10px;\n    border: 1px solid black;\n    margin: 20px;\n    box-shadow: 0px 0px 2px 1px #3d0c11 inset;\n}\n\n.addProject{\n    font-size: 1.5rem;\n    padding: 5px;\n    background-color: #3d0c11;\n    border: 1px solid #3D0C11;\n    color: white;\n    border-radius: 10px 10px 0px 0px;\n    margin-bottom: 20px;\n}\n\nlabel{\n    font-size: 0.8rem;\n    margin-left: 10px;\n    color: #3d0c11;\n}\n\n\n.create{\n    margin: 10px;\n    padding: 5px 10px;\n    color: white;\n    background-color: #3D0C11;\n    font-size: 0.8rem;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n    margin-top: 30px; \n\n}\n\n.cancel{\n    margin: 10px;\n    padding: 5px 10px;\n    font-size: 0.8rem;\n    border: 1px solid black;\n    background-color: white;\n    border-radius: 10px;\n    cursor: pointer;\n    margin-left: 140px; \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/dialogNewToDo.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/dialogNewToDo.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    padding: 0px;
    margin: 0px;
}

#dialogNewTodo{
    margin: 0 auto;
    margin-top: 200px;
    border: 1px solid white;
    border-radius: 10px;
}

#dialogNewTodo::backdrop{
    opacity: 0.8;
    background-color: #3d0c11;
}

.formNewToDo{
    width: 250px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 20px;
    box-shadow: 0px 0px 2px 1px #3d0c11 inset;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.addNewToDo{
    font-size: 1.5rem;
    padding: 5px;
    background-color: #3d0c11;
    border: 1px solid #3D0C11;
    color: white;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: 20px;
}

label{
    font-size: 0.8rem;
    margin-left: 10px;
    color: #3d0c11;
}

#inputDescriptionNewToDo{
    height: 60px;
}

.boxBtns{
    display: flex;
    align-self: flex-end;
}

.createToDo{
    margin: 10px;
    padding: 5px 10px;
    color: white;
    background-color: #3D0C11;
    font-size: 0.8rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.cancelToDo{
    margin: 10px;
    padding: 5px 10px;
    font-size: 0.8rem;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
}


select{
    width: 120px;
    margin-left: 10px;
}


.btnEditToDo{
    margin: 10px;
    padding: 5px 10px;
    color: white;
    background-color: #3D0C11;
    font-size: 0.8rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

`, "",{"version":3,"sources":["webpack://./src/css/dialogNewToDo.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,yCAAyC;IACzC,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;;AAGA;IACI,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n}\n\n#dialogNewTodo{\n    margin: 0 auto;\n    margin-top: 200px;\n    border: 1px solid white;\n    border-radius: 10px;\n}\n\n#dialogNewTodo::backdrop{\n    opacity: 0.8;\n    background-color: #3d0c11;\n}\n\n.formNewToDo{\n    width: 250px;\n    height: 300px;\n    border-radius: 10px;\n    border: 1px solid black;\n    margin: 20px;\n    box-shadow: 0px 0px 2px 1px #3d0c11 inset;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.addNewToDo{\n    font-size: 1.5rem;\n    padding: 5px;\n    background-color: #3d0c11;\n    border: 1px solid #3D0C11;\n    color: white;\n    border-radius: 10px 10px 0px 0px;\n    margin-bottom: 20px;\n}\n\nlabel{\n    font-size: 0.8rem;\n    margin-left: 10px;\n    color: #3d0c11;\n}\n\n#inputDescriptionNewToDo{\n    height: 60px;\n}\n\n.boxBtns{\n    display: flex;\n    align-self: flex-end;\n}\n\n.createToDo{\n    margin: 10px;\n    padding: 5px 10px;\n    color: white;\n    background-color: #3D0C11;\n    font-size: 0.8rem;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.cancelToDo{\n    margin: 10px;\n    padding: 5px 10px;\n    font-size: 0.8rem;\n    border: 1px solid black;\n    background-color: white;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n\nselect{\n    width: 120px;\n    margin-left: 10px;\n}\n\n\n.btnEditToDo{\n    margin: 10px;\n    padding: 5px 10px;\n    color: white;\n    background-color: #3D0C11;\n    font-size: 0.8rem;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root{
    --main-color: #3d0c11
}

*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;

}

body{
    display: grid;
    grid-template-columns: 200px 4fr;
    grid-template-rows: 140px 1fr; 
    height: 100vh;
    width: 100vw;
}

header{
    align-items: center;
    width: 100%;
    height: 140px;
    background-color: var(--main-color) ;
    grid-column:1 / 3; 
    display: grid;
    grid-template-columns: 200px 2fr;
    justify-items: center;
}


.boxAvatar{
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: none;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    border: 3px white solid;
}

#avatar{
    width: 200px;
    height: auto;
}


.headerTitle{
    color: white;
    font-size: 3.5rem;
    font-weight: 800;
    font-family: Helvetica, sans-serif;
}




`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":";AACA;IACI;AACJ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;;AAE1B;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,oCAAoC;IACpC,iBAAiB;IACjB,aAAa;IACb,gCAAgC;IAChC,qBAAqB;AACzB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,kCAAkC;AACtC","sourcesContent":["\n:root{\n    --main-color: #3d0c11\n}\n\n*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 200px 4fr;\n    grid-template-rows: 140px 1fr; \n    height: 100vh;\n    width: 100vw;\n}\n\nheader{\n    align-items: center;\n    width: 100%;\n    height: 140px;\n    background-color: var(--main-color) ;\n    grid-column:1 / 3; \n    display: grid;\n    grid-template-columns: 200px 2fr;\n    justify-items: center;\n}\n\n\n.boxAvatar{\n    width: 100px;\n    height: 100px;\n    overflow: hidden;\n    border: none;\n    border-radius: 100%;\n    display: flex;\n    justify-content: center;\n    border: 3px white solid;\n}\n\n#avatar{\n    width: 200px;\n    height: auto;\n}\n\n\n.headerTitle{\n    color: white;\n    font-size: 3.5rem;\n    font-weight: 800;\n    font-family: Helvetica, sans-serif;\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sectionToDos.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sectionToDos.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.boxMainToDo{
    width: 300px;
    height: clamp(300px 350px 600px);
    margin: 0 auto;
    margin-top: 30px;
    background-color: var(--main-color);
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.boxProjectName{
    margin-top: 20px;
    height: 30px;
    width: 250px;
    border-radius: 20px;
    background-color: white;
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-overflow: clip; 
    font-size: 1.1rem;
    font-weight: 600;   
}

.boxToDosList{
    width: 250px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    min-height: clamp(100px, 200px, 400px);
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 10px;
    margin-bottom: 20px;
}

.boxMyToDo {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
}


.checked{
    color:rgb(0, 0, 0);
    opacity: 0.3;
    text-decoration: line-through
}

.checkBox{
    cursor: pointer;
}

.checkBox:checked{
        border: none;
        outline: none;
        accent-color: var(--main-color);
}


.pName{
    width: 160px;
    height: 1.5rem;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    color: var(--main-color);
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
}

.boxPriority{
    height: 10px;
    width: 10px;
    border-radius: 5px;
}

.pHigh{
    background-color: rgb(255, 137, 137);
}

.pMedium{
    background-color: rgb(255, 255, 130);
    
}

.pLow{
    background-color: rgb(118, 255, 118);
}

.pDone{
    background-color: rgb(189, 188, 188);
}


/* buttons  */

.boxButtons{
    display: flex;
    gap: 10px;
}

.buttonNewToDo{
    background-color: white;
    color: var(--main-color);
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid white;
    margin-bottom: 10px;
    height: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.btnClearCheckedToDos{
    background-color: white;
    color: var(--main-color);
    font-weight: 400;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid white;
    margin-bottom: 10px;
    height: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
}

`, "",{"version":3,"sources":["webpack://./src/css/sectionToDos.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,gCAAgC;IAChC,cAAc;IACd,gBAAgB;IAChB,mCAAmC;IACnC,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,sCAAsC;IACtC,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,QAAQ;IACR,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB;IAClB,YAAY;IACZ;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;QACQ,YAAY;QACZ,aAAa;QACb,+BAA+B;AACvC;;;AAGA;IACI,YAAY;IACZ,cAAc;IACd,mCAAmC;IACnC,kBAAkB;IAClB,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;;AAExC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;;AAGA,aAAa;;AAEb;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB","sourcesContent":[".boxMainToDo{\n    width: 300px;\n    height: clamp(300px 350px 600px);\n    margin: 0 auto;\n    margin-top: 30px;\n    background-color: var(--main-color);\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.boxProjectName{\n    margin-top: 20px;\n    height: 30px;\n    width: 250px;\n    border-radius: 20px;\n    background-color: white;\n    color: var(--main-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-overflow: clip; \n    font-size: 1.1rem;\n    font-weight: 600;   \n}\n\n.boxToDosList{\n    width: 250px;\n    border-radius: 20px;\n    background-color: white;\n    display: flex;\n    min-height: clamp(100px, 200px, 400px);\n    flex-direction: column;\n    align-items: center;\n    padding: 15px;\n    gap: 10px;\n    margin-bottom: 20px;\n}\n\n.boxMyToDo {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    gap: 5px;\n    align-items: center;\n}\n\n\n.checked{\n    color:rgb(0, 0, 0);\n    opacity: 0.3;\n    text-decoration: line-through\n}\n\n.checkBox{\n    cursor: pointer;\n}\n\n.checkBox:checked{\n        border: none;\n        outline: none;\n        accent-color: var(--main-color);\n}\n\n\n.pName{\n    width: 160px;\n    height: 1.5rem;\n    border: 1px solid var(--main-color);\n    border-radius: 5px;\n    color: var(--main-color);\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.boxPriority{\n    height: 10px;\n    width: 10px;\n    border-radius: 5px;\n}\n\n.pHigh{\n    background-color: rgb(255, 137, 137);\n}\n\n.pMedium{\n    background-color: rgb(255, 255, 130);\n    \n}\n\n.pLow{\n    background-color: rgb(118, 255, 118);\n}\n\n.pDone{\n    background-color: rgb(189, 188, 188);\n}\n\n\n/* buttons  */\n\n.boxButtons{\n    display: flex;\n    gap: 10px;\n}\n\n.buttonNewToDo{\n    background-color: white;\n    color: var(--main-color);\n    font-weight: 700;\n    padding: 5px 10px;\n    border-radius: 5px;\n    border: 1px solid white;\n    margin-bottom: 10px;\n    height: 1.3rem;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.btnClearCheckedToDos{\n    background-color: white;\n    color: var(--main-color);\n    font-weight: 400;\n    padding: 5px 10px;\n    border-radius: 5px;\n    border: 1px solid white;\n    margin-bottom: 10px;\n    height: 1.3rem;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/aside.css":
/*!***************************!*\
  !*** ./src/css/aside.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./aside.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/aside.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/dialogCreateProject.css":
/*!*****************************************!*\
  !*** ./src/css/dialogCreateProject.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialogCreateProject_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialogCreateProject.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/dialogCreateProject.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialogCreateProject_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialogCreateProject_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialogCreateProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialogCreateProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/dialogNewToDo.css":
/*!***********************************!*\
  !*** ./src/css/dialogNewToDo.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialogNewToDo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialogNewToDo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/dialogNewToDo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialogNewToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialogNewToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialogNewToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialogNewToDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/sectionToDos.css":
/*!**********************************!*\
  !*** ./src/css/sectionToDos.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sectionToDos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sectionToDos.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sectionToDos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sectionToDos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sectionToDos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sectionToDos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sectionToDos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/$insert.js":
/*!************************!*\
  !*** ./src/$insert.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/avatar.jpg */ "./src/img/avatar.jpg");
/* harmony import */ var _consts_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts-listeners */ "./src/consts-listeners.js");



_consts_listeners__WEBPACK_IMPORTED_MODULE_1__.$imgAvatar.src = _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__

/***/ }),

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aside: () => (/* binding */ aside)
/* harmony export */ });
/* harmony import */ var _consts_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts-listeners */ "./src/consts-listeners.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _css_aside_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/aside.css */ "./src/css/aside.css");
/* harmony import */ var _sectionToDos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sectionToDos */ "./src/sectionToDos.js");






const aside = {
    notifyNewProject: function(){
        while (_consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$asideProjectList.firstChild){_consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$asideProjectList.firstChild.remove()}
        let myProjects = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.getMyProjects()
        myProjects.forEach((theProject, index)=>{
            let boxName = document.createElement("div")
            boxName.classList.add("boxNameAside")
            boxName.innerText = theProject.name
            
            let btnRemoveProject = document.createElement("button")
            btnRemoveProject.className = "btnRemoveProject"
            btnRemoveProject.textContent = "🗑"
            btnRemoveProject.addEventListener("click", ()=>{
                _projects__WEBPACK_IMPORTED_MODULE_1__.projects.removeProject(theProject)
                _projects__WEBPACK_IMPORTED_MODULE_1__.projects.notifyObservers(aside, "notifyNewProject")
                _projects__WEBPACK_IMPORTED_MODULE_1__.projects.notifyObservers(_sectionToDos__WEBPACK_IMPORTED_MODULE_3__.sectionToDos, "clearSection")
            })

            let boxAnAsideProject = document.createElement("div")
            boxAnAsideProject.className = "boxAnAsideProject"
            boxAnAsideProject.appendChild(boxName)
            boxAnAsideProject.addEventListener("click", ()=>{
                _projects__WEBPACK_IMPORTED_MODULE_1__.projects.notifyObservers(_sectionToDos__WEBPACK_IMPORTED_MODULE_3__.sectionToDos,"notifySectionToDos", myProjects[index])
            })

            let boxToTheBoxLol = document.createElement("div")
            boxToTheBoxLol.classList.add("boxToTheBoxLol")
            boxToTheBoxLol.appendChild(boxAnAsideProject)
            boxToTheBoxLol.appendChild(btnRemoveProject)

            _consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$asideProjectList.appendChild(boxToTheBoxLol)
        })
    }
}

_projects__WEBPACK_IMPORTED_MODULE_1__.projects.addObserver(aside)





/***/ }),

/***/ "./src/consts-listeners.js":
/*!*********************************!*\
  !*** ./src/consts-listeners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $asideProjectList: () => (/* binding */ $asideProjectList),
/* harmony export */   $imgAvatar: () => (/* binding */ $imgAvatar),
/* harmony export */   $sectionToDos: () => (/* binding */ $sectionToDos)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/aside.js");



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
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.createProject($nameNewProject.value)
    $dialogCreateProject.close();
    $nameNewProject.value = ""
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.notifyObservers(_aside__WEBPACK_IMPORTED_MODULE_1__.aside, "notifyNewProject")
})

$nameNewProject.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault()
        _projects__WEBPACK_IMPORTED_MODULE_0__.projects.createProject($nameNewProject.value)
        $dialogCreateProject.close();
        $nameNewProject.value = ""
        _projects__WEBPACK_IMPORTED_MODULE_0__.projects.notifyObservers(_aside__WEBPACK_IMPORTED_MODULE_1__.aside, "notifyNewProject")
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
        addProject: function(theProject){
            myProjects.push(theProject);
        },
        removeProject: function(projectToRemove){
            let indexToRemove = myProjects.indexOf(projectToRemove)
            myProjects.splice(indexToRemove, 1);
        },
        addObserver: function(newOb){
            observers.push(newOb)
            console.log("observer add")
        },
        removeObserver: function(obToRem){
            observers = observers.filter(ob=>ob!==obToRem)
        },        
        notifyObservers: function(observer, varName, arg){
            observers.forEach((obs)=>{
                if(obs == observer){obs[varName](arg); console.log("notify")}
            })
        },
        createProject: function(name){
            const newProject = {
                name,
                toDos: [],
                getToDos: function(){return this.toDos},
                addToDo: function(title, checked = false, priority, description ){
                    //, description, dueDate, notes, priority, checkList = false
                    const newTodo = {title, checked, priority, description}
                    //, description, dueDate, notes, priority, checkList
                    this.toDos.push(newTodo)
                },
                removeToDo: function(toDoToRemove){
                    this.toDos = this.toDos.filter(someTodo=>someTodo !== toDoToRemove)
                    
                }
            }
            projects.addProject(newProject)
            return newProject
        }
    }
})()













/***/ }),

/***/ "./src/sectionToDos.js":
/*!*****************************!*\
  !*** ./src/sectionToDos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sectionToDos: () => (/* binding */ sectionToDos)
/* harmony export */ });
/* harmony import */ var _consts_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts-listeners */ "./src/consts-listeners.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _css_sectionToDos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/sectionToDos.css */ "./src/css/sectionToDos.css");





const $dialogNewTodo = document.querySelector("#dialogNewTodo")
const $boxCreateToDo = document.querySelector(".boxCreateToDo")
const $inputNameNewToDo = document.querySelector("#inputNameNewToDo")
const $inputDescriptionNewToDo = document.querySelector("#inputDescriptionNewToDo")
const $inputPriority = document.querySelector(".inputPriority")




const sectionToDos = {
    notifySectionToDos: function(aProject){
        while(_consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$sectionToDos.firstChild){_consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$sectionToDos.firstChild.remove()}
        
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

            // BOTON NEW TO DO
            $dialogNewTodo.showModal()
            $inputNameNewToDo.value = ""
            $inputDescriptionNewToDo.value = ""
            $inputPriority.value = ""

            while($boxCreateToDo.firstChild){$boxCreateToDo.firstChild.remove()}

            const createToDo = document.createElement("button")
            createToDo.className = "createToDo"
            createToDo.textContent = "Create To Do"
            $boxCreateToDo.appendChild(createToDo)

            createToDo.addEventListener("click", function(event){
                event.preventDefault()
                const inputDescriptionNewToDo = document.querySelector("#inputDescriptionNewToDo")

                aProject.addToDo($inputNameNewToDo.value, false, $inputPriority.value, inputDescriptionNewToDo.value)
                $inputNameNewToDo.value = ""
                $inputPriority.value = ""
                inputDescriptionNewToDo.value = ""
                $dialogNewTodo.close()
                _projects__WEBPACK_IMPORTED_MODULE_1__.projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
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
                _projects__WEBPACK_IMPORTED_MODULE_1__.projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
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
            
            const checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            checkBox.className = "checkBox"
            checkBox.checked = aToDo.checked

            const pName = document.createElement("div")
            pName.className = "pName"
            pName.textContent = aToDo.title
            if(aToDo.checked == true){pName.classList.add("checked")}
            if(aToDo.checked == false){pName.classList.remove("checked")}
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

                btnEditToDo.addEventListener("click", function(){
                    // los cambia por los nuevos
                    aToDo.title = $inputNameNewToDo.value
                    aToDo.description = $inputDescriptionNewToDo.value
                    aToDo.priority = $inputPriority.value

                    _projects__WEBPACK_IMPORTED_MODULE_1__.projects.notifyObservers(sectionToDos, "notifySectionToDos", aProject)
                    $dialogNewTodo.close()
                    // limpia los cambios del form
                    $inputNameNewToDo.value = ""
                    $inputDescriptionNewToDo.value = ""
                    $inputPriority.value = ""
                })
            })

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
        
        _consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$sectionToDos.appendChild(boxMainToDo)
    },
    clearSection: function(){
        if(_consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$sectionToDos.firstChild){_consts_listeners__WEBPACK_IMPORTED_MODULE_0__.$sectionToDos.firstChild.remove()}
    }
}

_projects__WEBPACK_IMPORTED_MODULE_1__.projects.addObserver(sectionToDos)

    

/***/ }),

/***/ "./src/img/avatar.jpg":
/*!****************************!*\
  !*** ./src/img/avatar.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf1d0d84034e5c4a3184.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _consts_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts-listeners */ "./src/consts-listeners.js");
/* harmony import */ var _$insert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./$insert */ "./src/$insert.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside */ "./src/aside.js");
/* harmony import */ var _sectionToDos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sectionToDos */ "./src/sectionToDos.js");
/* harmony import */ var _css_dialogCreateProject_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/dialogCreateProject.css */ "./src/css/dialogCreateProject.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_sectionToDos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/sectionToDos.css */ "./src/css/sectionToDos.css");
/* harmony import */ var _css_dialogNewToDo_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/dialogNewToDo.css */ "./src/css/dialogNewToDo.css");





// css








_projects__WEBPACK_IMPORTED_MODULE_0__.projects.createProject("myFirstTestProject")
_projects__WEBPACK_IMPORTED_MODULE_0__.projects.notifyObservers(_aside__WEBPACK_IMPORTED_MODULE_3__.aside, "notifyNewProject")
_projects__WEBPACK_IMPORTED_MODULE_0__.projects.createProject("AnotherProject")
_projects__WEBPACK_IMPORTED_MODULE_0__.projects.notifyObservers(_aside__WEBPACK_IMPORTED_MODULE_3__.aside, "notifyNewProject")


// Agregar manualmente ToDO y notificar sectionToDos
let myProjects = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getMyProjects()
myProjects[0].addToDo("aRandomTask", false, "high", "Random Description")
// projects.notifyObservers(sectionToDos, "notifyListToDos", myProjects[0])
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map