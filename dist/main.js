/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage */ \"./src/modules/loadPage.js\");\n\n\n;\n\n(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://to-do-lists-manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n// creates a btn\nfunction createBtn(id, text) {\n    const btn = document.createElement('button');\n    btn.setAttribute('id', id);\n\n    const span = document.createElement('span');\n    span.setAttribute('class', 'span');\n    span.textContent = text;\n\n    btn.appendChild(span);\n\n    return btn;\n}\n\n// create header\nfunction createHeader(id, text) {\n    const header = document.createElement('header');\n    header.setAttribute('id', id);\n    \n    const headerText = document.createElement('h1');\n    headerText.textContent = text;\n    header.appendChild(headerText);\n\n    return header;\n}\n\n// create footer\nfunction createFooter(id, text) {\n    const footer = document.createElement('footer');\n    footer.setAttribute('id', id);\n\n    const footerText = document.createElement('h5');\n    footerText.textContent = text;\n    footer.appendChild(footerText);\n    \n    return footer;\n}\n\nfunction createMain(id) {\n    const main = document.createElement('div');\n    main.setAttribute('id', id);\n    \n    return main;\n}\n\n// create side bar\nfunction createSidebar(id, text) {\n    const sidebar = document.createElement('div');\n    sidebar.setAttribute('id', id);\n\n    const title = document.createElement('h3');\n    title.textContent = text;\n    \n    const btns = document.createElement('div');\n    const addListBtn = createBtn('add-list-btn', 'Add List');\n    const addProjectBtn = createBtn('add-project-btn', 'Add Project');\n    btns.appendChild(addListBtn);\n    btns.appendChild(addProjectBtn);\n\n    sidebar.appendChild(title);\n    sidebar.appendChild(btns)\n\n    return sidebar;\n}\n\n// create main\nfunction createTaskDisplay(id, text) {\n    const taskDisplay = document.createElement('div');\n    taskDisplay.setAttribute('id', id);\n\n    const title = document.createElement('h2');\n    title.textContent = text;\n\n    const btn = createBtn('add-task-btn', 'Add Task');\n    \n    taskDisplay.appendChild(title);\n    taskDisplay.appendChild(btn);\n\n    return taskDisplay; \n}\n\nfunction loadPage() {\n    const content = document.getElementById('content');\n    const header = createHeader('header', 'To-Do Task Manager');\n    const footer = createFooter('footer', '@All rights reserved');\n    const sidebar = createSidebar('sidebar', 'Projects');\n    const display = createTaskDisplay('task-display', 'Tasks');\n\n    const main = createMain('main');\n    main.appendChild(sidebar);\n    main.appendChild(display);\n\n    content.appendChild(header);\n    content.appendChild(main);\n    content.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://to-do-lists-manager/./src/modules/loadPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;