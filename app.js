const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template.js");

// inquirer
// 	.prompt([
// 		{
// 			type: "input",
// 			name: "name",
// 			message: "What is your name?",
// 		},
// 	])
//   .then((answers) => console.log(answers));

const prompUser = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is your name?",
			validate: (userInput) => {
				if (userInput) {
					return true;
				} else {
					console.log("Please enter user name. [required]");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "github",
			message: "Enter your GitHub Username. [required]",
			validate: (uname) => {
				if (uname) return true;
				else {
					console.log("Please enter GitHub username");
				}
			},
		},
		{
			type: "confirm",
			name: "confirmAbout",
			message:
				'Would you like to enter some information about yourself for an "About" section?',
			default: true,
		},
		{
			type: "input",
			name: "about",
			message: "Provide some information about yourself",
			when: ({ confirmAbout }) => {
				if (confirmAbout) return true;
				else return false;
			},
		},
	]);
};

const promptProject = (portfolioData) => {
	if (!portfolioData.projects) {
		console.log("initialized");

		portfolioData.projects = [];
	}
	console.log(portfolioData.projects);
	console.log(`
  =================================================
  
        Add New Project
  
  =================================================
  
  `);
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your project name? [required]",
				validate: (projectName) => {
					if (projectName) return true;
					else {
						console.log("Please enter the project name.");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "description",
				message: "Provide description of your project [required]",
				validate: (desc) => {
					if (desc) {
						return true;
					} else {
						console.log("Please enter the valid description.");
						return false;
					}
				},
			},
			{
				type: "checkbox",
				name: "languages",
				message:
					"What language did you use to build the project?(Check all that apply",
				choices: [
					"JavaScript",
					"jQuery",
					"Node.js",
					"BootStrap",
					"CSS",
					"HTML5",
				],
			},
			{
				type: "input",
				name: "link",
				message: "Enter the GitHub link for your project. [Required]",
				validate: (link) => {
					if (link) return true;
					else {
						console.log("Return project link of the project");
						return false;
					}
				},
			},
			{
				type: "confirm",
				name: "feature",
				message: "Would you like to feature this project?",
				default: "false",
			},
			{
				type: "confirm",
				name: "confirmAddProject",
				message: "Would you like to add another project?",
				default: "false",
			},
		])
		.then((projectData) => {
			portfolioData.projects.push(projectData);
			if (projectData.confirmAddProject) {
				return promptProject(portfolioData);
			} else return portfolioData;
		});
};

const mockData = {
	name: "Learnatino",
	github: "learnationo",
	about: "Hello this is me",
	projects: [
		{
			name: "run buddy",
			description: "runbuddy desc",
			languages: ["JS", "jQuery", "Node.js"],
			link: "runbuddy link",
			feature: true,
			confirmAddProject: false,
		},
	],
};
//const pageHTML = generatePage(mockData);

prompUser()
	.then(promptProject)
	.then((portfolioData) => {
		const pageHTML = generatePage(portfolioData);

		fs.writeFile("./index.html", pageHTML, (err) => {
			if (err) throw new Error(err);

			console.log(
				"Page created! Check out index.html in this directory to see it!"
			);
		});
	});
