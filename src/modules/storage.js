"use strict";

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

export default storage;
