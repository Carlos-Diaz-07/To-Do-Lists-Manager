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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage */ \"./src/modules/loadPage.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst addProjectBtn = document.getElementById(\"add-project-btn\");\naddProjectBtn.addEventListener(\"click\", _modules_storage__WEBPACK_IMPORTED_MODULE_1__.default.project);\n\nconst addListBtn = document.getElementById(\"add-list-btn\");\naddListBtn.addEventListener(\"click\", _modules_storage__WEBPACK_IMPORTED_MODULE_1__.default.list);\n\nconst addTaskBtn = document.getElementById(\"add-task-btn\");\naddTaskBtn.addEventListener(\"click\", _modules_storage__WEBPACK_IMPORTED_MODULE_1__.default.task);\n\n\n//# sourceURL=webpack://to-do-lists-manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/createEntry.js":
/*!************************************!*\
  !*** ./src/modules/createEntry.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n// module patter function \"createEntry\" and factory functions inside \"addProject\", \"add...\"\nconst createEntry = (() => {\n\t// create projects\n\tconst newProject = (projectName) => {\n\t\tconst lists = [];\n\n\t\treturn { projectName, lists };\n\t};\n\n\t// create lists\n\t// remember to create lists without project there should be a project called \"no project\" in the storage\n\tconst newList = (listName) => {\n\t\t\tconst tasks = [];\n\t\t\n\t\treturn { listName, tasks };\n\t};\n\n\t// create task\n\tconst newTask = (taskName) => {\n\t\t\tconst priority = \"\";\n\t\t\tconst dueDate = \"\";\n\n\t\treturn { taskName, priority, dueDate };\n\t};\n\n\treturn { newProject, newList, newTask };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEntry);\n\n//# sourceURL=webpack://to-do-lists-manager/./src/modules/createEntry.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n// creates a btn\nfunction createBtn(idAndClass, text) {\n\tconst btn = document.createElement(\"button\");\n\tbtn.setAttribute(\"id\", idAndClass);\n\tbtn.setAttribute(\"class\", idAndClass);\n\n\tconst span = document.createElement(\"span\");\n\tspan.setAttribute(\"class\", \"span\");\n\tspan.textContent = text;\n\n\tbtn.appendChild(span);\n\n\treturn btn;\n}\n\n// create header\nfunction createHeader(id, text) {\n\tconst header = document.createElement(\"header\");\n\theader.setAttribute(\"id\", id);\n\n\tconst headerText = document.createElement(\"h1\");\n\theaderText.textContent = text;\n\theader.appendChild(headerText);\n\n\treturn header;\n}\n\n// create footer\nfunction createFooter(id, text) {\n\tconst footer = document.createElement(\"footer\");\n\tfooter.setAttribute(\"id\", id);\n\n\tconst footerText = document.createElement(\"h5\");\n\tfooterText.textContent = text;\n\tfooter.appendChild(footerText);\n\n\treturn footer;\n}\n\nfunction createMain(id) {\n\tconst main = document.createElement(\"div\");\n\tmain.setAttribute(\"id\", id);\n\n\treturn main;\n}\n\n// create side bar\nfunction createSidebar(id, text) {\n\tconst sidebar = document.createElement(\"div\");\n\tsidebar.setAttribute(\"id\", id);\n\n\tconst title = document.createElement(\"h3\");\n\ttitle.textContent = text;\n\n\tconst input = document.createElement(\"input\");\n\tinput.setAttribute(\"id\", \"sidebar-input\");\n\tinput.setAttribute(\"required\", \"required\");\n\tinput.setAttribute(\"pattern\", \"[a-z0-9]/ig\");\n\n\tconst btns = document.createElement(\"div\");\n\tbtns.setAttribute(\"id\", \"sidebar-btns\");\n\tconst addListBtn = createBtn(\"add-list-btn\", \"Add List\");\n\tconst addProjectBtn = createBtn(\"add-project-btn\", \"Add Project\");\n\n\tbtns.appendChild(addListBtn);\n\tbtns.appendChild(addProjectBtn);\n\n\tsidebar.appendChild(title);\n\tsidebar.appendChild(input);\n\tsidebar.appendChild(btns);\n\n\treturn sidebar;\n}\n\nfunction createTaskDisplay(id, text) {\n\tconst taskDisplay = document.createElement(\"div\");\n\ttaskDisplay.setAttribute(\"id\", id);\n\n\tconst title = document.createElement(\"h2\");\n\ttitle.textContent = text;\n\n\tconst input = document.createElement(\"input\");\n\tinput.setAttribute(\"id\", \"task-input\");\n\tinput.setAttribute(\"required\", \"required\");\n\tinput.setAttribute(\"pattern\", \"[a-z0-9]/ig\");\n\n\tconst btn = createBtn(\"add-task-btn\", \"Add Task\");\n\n\ttaskDisplay.appendChild(title);\n\ttaskDisplay.appendChild(input);\n\ttaskDisplay.appendChild(btn);\n\n\treturn taskDisplay;\n}\n\nfunction loadPage() {\n\tconst content = document.getElementById(\"content\");\n\tconst header = createHeader(\"header\", \"To-Do Task Manager\");\n\tconst footer = createFooter(\"footer\", \"@All rights reserved\");\n\tconst sidebar = createSidebar(\"sidebar\", \"Projects\");\n\tconst display = createTaskDisplay(\"task-display\", \"Tasks\");\n\n\tconst main = createMain(\"main\");\n\tmain.appendChild(sidebar);\n\tmain.appendChild(display);\n\n\tcontent.appendChild(header);\n\tcontent.appendChild(main);\n\tcontent.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://to-do-lists-manager/./src/modules/loadPage.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEntry */ \"./src/modules/createEntry.js\");\n\n\n\n\n// Storage array\nconst storage = [\n\t{\n\t\tprojectName: \"no project\",\n\t\tlists: [\n\t\t\t{\n\t\t\t\tlistName: \"shopping\",\n\t\t\t\ttasks: [\n\t\t\t\t\t{ taskName: \"task1\", priority: \"red\", dueDate: \"12062021\" },\n\t\t\t\t\t{},\n\t\t\t\t],\n\t\t\t},\n\t\t],\n\t},\n\t{\n\t\tprojectName: \"car maintenance\",\n\t\tlists: [\n\t\t\t{\n\t\t\t\tlistName: \"engine\",\n\t\t\t\ttasks: [{ taskName: \"task2\", priority: \"green\", dueDate: \"\" }],\n\t\t\t},\n\t\t\t{\n\t\t\t\tlistName: \"tyres\",\n\t\t\t\ttasks: [{ taskName: \"taskw\", priority: \"red\", dueDate: \"\" }],\n\t\t\t},\n\t\t],\n\t},\n];\n\n// Storage control\nconst addToStorage = (() => {\n\tconst project = () => {\n\t\tconst newProjectName = document.getElementById(\"sidebar-input\").value;\n\t\tconst newProject = _createEntry__WEBPACK_IMPORTED_MODULE_0__.default.newProject(newProjectName);\n\n\t\tstorage.push(newProject);\n\t};\n\n\tconst list = () => {\n\t\tconst newListName = document.getElementById(\"sidebar-input\").value;\n\t\tconst inProject = \"\";\n\t\tconst newList = _createEntry__WEBPACK_IMPORTED_MODULE_0__.default.newList(newListName);\n\n\t\tstorage.forEach((project) => {\n\t\t\tif (project.projectName === inProject) {\n\t\t\t\tproject.lists.push(newList);\n\t\t\t}\n\t\t});\n\t};\n\n\tconst task = () => {\n\t\tconst newTaskName = document.getElementById(\"task-input\").value;\n\t\tconst inList = \"\";\n\t\tconst newTask = _createEntry__WEBPACK_IMPORTED_MODULE_0__.default.newTask(newTaskName);\n\n\t\tstorage.forEach((project) =>\n\t\t\tproject.lists.forEach((list) => {\n\t\t\t\tif (list.listName === inList) {\n\t\t\t\t\tlist.tasks.push(newTask);\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t};\n\treturn { list, project, task };\n})();\n\nconsole.log(storage);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToStorage);\n\n\n//# sourceURL=webpack://to-do-lists-manager/./src/modules/storage.js?");

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