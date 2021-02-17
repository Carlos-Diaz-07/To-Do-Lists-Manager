"use strict";

import storage from "./storage";

const renderStorage = () => {
	const displayProjects = () => {
		storage.forEach((project) => {
			const projectDiv = document.createElement("div");
			const sidebar = document.getElementById("sidebar");
			const text = project.projectName;

			projectDiv.setAttribute('class', 'project');
			projectDiv.setAttribute("id", text);
			projectDiv.textContent = text;

			sidebar.appendChild(projectDiv);
		});
	};

	const displayLists = () => {
		storage.forEach((project) => {
			project.lists.forEach((list) => {
				const listDiv = document.createElement("div");
				const text = list.listName;
				const inProject = document.getElementById(`${project.projectName}`);

				listDiv.setAttribute('class', 'list');
				listDiv.setAttribute('in-project', project.projectName);
				listDiv.textContent = text;

				inProject.appendChild(listDiv);
			});
		});
	};

	// add tasks to the dom
	// function displayTasks(){
	const displayTasks = () => {
		storage.forEach((project) => {
			project.lists.forEach((list) => {
				list.tasks.forEach((task) => {
					const taskDiv = document.createElement('div');
					const tasksContainer = document.getElementById('tasks-container');
					const text = task.taskName;

					taskDiv.setAttribute('class', 'task');
					taskDiv.setAttribute('in-list', list.listName);
					taskDiv.textContent = text;

					tasksContainer.appendChild(taskDiv);
				});
			});
		});
	};

	
	displayProjects();
	displayLists();
	displayTasks();
};

// funtion that render new entrys
const renderNewEntry = () => {

}
export { renderStorage, renderNewEntry };
