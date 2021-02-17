"use strict";

import storage from './storage'

const createEntry = (() => {

	// create projects
	const newProject = (projectName) => {
		const lists = [];

		return { projectName, lists };
	};

	// create lists
	const newList = (listName) => {
			const tasks = [];
		
		return { listName, tasks };
	};

	// create task
	const newTask = (taskName) => {
			const priority = "";
			const dueDate = "";

		return { taskName, priority, dueDate };
	};

	return { newProject, newList, newTask };
})();

// adds to storage
const addToStorage = (() => {
	const project = () => {
		const newProjectName = document.getElementById("sidebar-input").value;
		const newProject = createEntry.newProject(newProjectName);

		storage.push(newProject);
	};

	const list = () => {
		const newListName = document.getElementById("sidebar-input").value;
		const newList = createEntry.newList(newListName);
		const inProject = 'no project'; // * change for active project

		storage.forEach((project) => {
			if (project.projectName === inProject) {
				project.lists.push(newList);
			}
		});
	};

	const task = () => {
		const newTaskName = document.getElementById("task-input").value;
		const inList = "shopping"; // * change for active list
		const newTask = createEntry.newTask(newTaskName);

		storage.forEach((project) => {
			project.lists.forEach((list) => {
				if (list.listName === inList) {
					list.tasks.push(newTask);
				}
			})
		});
	};

	return { list, project, task };
})();

export default addToStorage;