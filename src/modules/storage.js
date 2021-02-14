"use strict";

import createEntry from "./createEntry";

// Storage array
const storage = [
	{
		projectName: "no project",
		lists: [
			{
				listName: "shopping",
				tasks: [
					{ taskName: "task1", priority: "red", dueDate: "12062021" },
					{},
				],
			},
		],
	},
	{
		projectName: "car maintenance",
		lists: [
			{
				listName: "engine",
				tasks: [{ taskName: "task2", priority: "green", dueDate: "" }],
			},
			{
				listName: "tyres",
				tasks: [{ taskName: "taskw", priority: "red", dueDate: "" }],
			},
		],
	},
];

// Storage control
const addToStorage = (() => {
	const project = () => {
		const newProjectName = document.getElementById("sidebar-input").value;
		const newProject = createEntry.newProject(newProjectName);

		storage.push(newProject);
	};

	const list = () => {
		const newListName = document.getElementById("sidebar-input").value;
		const inProject = "";
		const newList = createEntry.newList(newListName);

		storage.forEach((project) => {
			if (project.projectName === inProject) {
				project.lists.push(newList);
			}
		});
	};

	const task = () => {
		const newTaskName = document.getElementById("task-input").value;
		const inList = "";
		const newTask = createEntry.newTask(newTaskName);

		storage.forEach((project) =>
			project.lists.forEach((list) => {
				if (list.listName === inList) {
					list.tasks.push(newTask);
				}
			})
		);
	};
	return { list, project, task };
})();

console.log(storage);

export { addToStorage, storage };