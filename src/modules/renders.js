"use strict";

import storage from "./storage";

const displayProject = (project) => {
	const projectDiv = document.createElement("div");
	const sidebar = document.getElementById("sidebar");
	const text = project.projectName;

	projectDiv.setAttribute("class", "project");
	projectDiv.setAttribute("id", text);
	projectDiv.textContent = text;

	sidebar.appendChild(projectDiv);
};

const displayList = (list, project) => {
	const listDiv = document.createElement("div");
	const text = list.listName;
	const inProject = document.getElementById(`${project.projectName}`); // add project by active class here...

	listDiv.setAttribute("class", "list");
	listDiv.setAttribute("in-project", project.projectName);
	listDiv.textContent = text;

	inProject.appendChild(listDiv);
};

const displayTask = (task, list) => {
	const taskDiv = document.createElement("div");
	const tasksContainer = document.getElementById("tasks-container"); // add list by active class here
	const text = task.taskName;

	taskDiv.setAttribute("class", "task");
	taskDiv.setAttribute("in-list", list.listName);
	taskDiv.textContent = text;

	tasksContainer.appendChild(taskDiv);
};

const renderStorage = () => {
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

// funtion that render new entrys
const renderEntry = (() => {
	const project = () => {
		storage.forEach((project) => {
			const newProject = document.getElementById("sidebar-input").value;
			if (project.projectName === newProject) {
				displayProject(project);
			}
		});
	};
	const list = () => {
		storage.forEach((project) => {
			project.lists.forEach((list) => {
				const newList = document.getElementById("sidebar-input").value;
				if (list.listName === newList) {
					displayList(list, project);
				}
			});
		});
	};

	const task = () => {
		storage.forEach((project) => {
			project.lists.forEach((list) => {
				list.tasks.forEach((task) => {
					const newTask = document.getElementById("task-input").value;
					if ((task.taskName === newTask)) {
						displayTask(task, list);
					}
				});
			});
		});
	};

	return { project, list, task };
})();

export { renderStorage, renderEntry };
