"use strict";

import storage from "./modules/storage";

// module patter function "createEntry" and factory functions inside "addProject", "add..."
const createEntry = (() => {
	// create projects
	const newProject = (projectName) => {
		const projectObject = {
			projectName: projectName,
			list: [],
		};

		return { projectObject };
	};

	// create lists
	// remember to create lists without project there should be a project called "no project" in the storage
	const newList = (listName) => {
		const listObject = {
			listName: listName,
			tasks: [],
		};
		return { listObject };
	};

	// create task
	const newTask = (taskName) => {
		const taskObject = {
			taskName: taskName,
			priority: "",
			dueDate: "",
		};
		return { taskObject };
	};

	return { newProject, newList, newTask };
})();
