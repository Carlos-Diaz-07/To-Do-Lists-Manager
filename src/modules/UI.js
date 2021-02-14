"use strict";

import { storage } from "./storage";

// Should I group everything in one render()?

// add projects to the dom
const displayProjects = () => {

	storage.forEach((project) => {
		const projectDiv = document.createElement("div");
		const sidebar = document.getElementById("sidebar");
		const text = project.projectName;
		projectDiv.textContent = text;
		sidebar.appendChild(projectDiv);
	});
};

// add lists to the dom
// function displayLists() {

// }

// add tasks to the dom
// function displayTasks(){

// }

// selected project and list gets a different "active" class

export { displayProjects };
