"use strict";

import loadPage from "./modules/loadPage";
import { addToStorage } from "./modules/storage";
import displayProjects from "./modules/UI";

loadPage();

const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", addToStorage.project);

const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", addToStorage.list);

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", addToStorage.task);

displayProjects();