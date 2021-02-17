"use strict";

// creates a btn
function createBtn(idAndClass, text) {
	const btn = document.createElement("button");
	btn.setAttribute("id", idAndClass);
	btn.setAttribute("class", idAndClass);

	const span = document.createElement("span");
	span.setAttribute("class", "span");
	span.textContent = text;

	btn.appendChild(span);

	return btn;
}

// create header
function createHeader(id, text) {
	const header = document.createElement("header");
	header.setAttribute("id", id);

	const headerText = document.createElement("h1");
	headerText.textContent = text;
	header.appendChild(headerText);

	return header;
}

// create footer
function createFooter(id, text) {
	const footer = document.createElement("footer");
	footer.setAttribute("id", id);

	const footerText = document.createElement("h5");
	footerText.textContent = text;
	footer.appendChild(footerText);

	return footer;
}

function createMain(id) {
	const main = document.createElement("div");
	main.setAttribute("id", id);

	return main;
}

// create side bar
function createSidebar(id, text) {
	const sidebar = document.createElement("div");
	sidebar.setAttribute("id", id);

	const title = document.createElement("h3");
	title.textContent = text;

	const input = document.createElement("input");
	input.setAttribute("id", "sidebar-input");
	input.setAttribute("required", "required");
	input.setAttribute("pattern", "[a-z0-9]/ig");

	const btns = document.createElement("div");
	btns.setAttribute("id", "sidebar-btns");
	const addListBtn = createBtn("add-list-btn", "Add List");
	const addProjectBtn = createBtn("add-project-btn", "Add Project");

	btns.appendChild(addListBtn);
	btns.appendChild(addProjectBtn);

	sidebar.appendChild(title);
	sidebar.appendChild(input);
	sidebar.appendChild(btns);

	return sidebar;
}

function createTaskDisplay(id, text) {
	const taskDisplay = document.createElement("div");
	taskDisplay.setAttribute("id", id);

	const title = document.createElement("h2");
	title.textContent = text;

	const input = document.createElement("input");
	input.setAttribute("id", "task-input");
	input.setAttribute("required", "required");
	input.setAttribute("pattern", "[a-z0-9]/ig");

	const btn = createBtn("add-task-btn", "Add Task");

	const tasksContainer = document.createElement('div');
	tasksContainer.setAttribute('id', 'tasks-container');
	
	taskDisplay.appendChild(title);
	taskDisplay.appendChild(input);
	taskDisplay.appendChild(btn);
	taskDisplay.appendChild(tasksContainer);

	return taskDisplay;
}

function loadPage() {
	const content = document.getElementById("content");
	const header = createHeader("header", "To-Do Task Manager");
	const footer = createFooter("footer", "@All rights reserved");
	const sidebar = createSidebar("sidebar", "Projects");
	const display = createTaskDisplay("task-display", "Tasks");

	const main = createMain("main");
	main.appendChild(sidebar);
	main.appendChild(display);

	content.appendChild(header);
	content.appendChild(main);
	content.appendChild(footer);
}

export default loadPage;
