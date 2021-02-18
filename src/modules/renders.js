"use strict";

import { storage } from "./storage";

const render = (() => {
	const displayProject = (project) => {
		const projectDiv = document.createElement("div");
		const sidebar = document.getElementById("sidebar");
		const text = project.projectName;

		const deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "delete-btn");

		projectDiv.setAttribute("class", "project");
		projectDiv.setAttribute("id", text);
		projectDiv.textContent = text;
		projectDiv.appendChild(deleteBtn);

		sidebar.appendChild(projectDiv);
	};

	const displayList = (list, project) => {
		const listDiv = document.createElement("div");
		const text = list.listName;
		const inProject = document.getElementById(`${project.projectName}`); // add project by active class here...

		const deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "delete-btn");

		listDiv.setAttribute("class", "list");
		listDiv.setAttribute("in-project", project.projectName);
		listDiv.textContent = text;
		listDiv.appendChild(deleteBtn);

		inProject.appendChild(listDiv);
	};

	const displayTask = (task, list) => {
		const taskDiv = document.createElement("div");
		const tasksContainer = document.getElementById("tasks-container"); // add list by active class here
		const text = task.taskName;

		const deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "delete-btn");

		taskDiv.setAttribute("class", "task");
		taskDiv.setAttribute("in-list", list.listName);
		taskDiv.textContent = text;
		taskDiv.appendChild(deleteBtn);

		tasksContainer.appendChild(taskDiv);
	};

	const displayStorage = () => {
		const displayAllProjects = () => {
			storage.forEach((project) => {
				displayProject(project);
			});
		};

		const displayAllLists = () => {
			storage.forEach((project) => {
				project.lists.forEach((list) => {
					displayList(list, project);
				});
			});
		};

		const displayAllTasks = () => {
			storage.forEach((project) => {
				project.lists.forEach((list) => {
					list.tasks.forEach((task) => {
						displayTask(task, list);
					});
				});
			});
		};

		displayAllProjects();
		displayAllLists();
		displayAllTasks();
	};

	return { displayProject, displayList, displayTask, displayStorage };
})();
export default render;
