"use strict";

// module patter function "createEntry" and factory functions inside "addProject", "add..."
const createEntry = (() => {
	// create projects
	const newProject = (projectName) => {
		const lists = [];

		return { projectName, lists };
	};

	// create lists
	// remember to create lists without project there should be a project called "no project" in the storage
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

export default createEntry;