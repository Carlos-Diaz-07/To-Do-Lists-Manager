"use strict";

import loadPage from "./modules/loadPage";
import addToStorage from "./modules/createEntry";
import { renderStorage, renderEntry } from "./modules/renders";

loadPage();
renderStorage();

const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
	addToStorage.project();
	renderEntry.project();
});

const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", () => {
	addToStorage.list();
	renderEntry.list();
});

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", () => {
	addToStorage.task();
	renderEntry.task();
});
