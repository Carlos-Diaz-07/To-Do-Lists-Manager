"use strict";

import loadPage from "./modules/loadPage";
import addToStorage from "./modules/createEntry";
import render from "./modules/renders";
import { checkLocalStorage } from "./modules/storage";

loadPage();
checkLocalStorage();
render.displayStorage();

const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
	addToStorage.project();
});

const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", () => {
	addToStorage.list();
});

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", () => {
	addToStorage.task();
});
