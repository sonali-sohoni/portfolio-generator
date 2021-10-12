const inquirer = require("inquirer");
inquirer
	.prompt([
		{
			type: "input",
			name: "name",
			message: "What is your name?",
		},
	])
	.then((answers) => console.log(answers));

// const fs = require("fs");
// const generatePage = require("./src/page-template.js");
// console.log(generatePage);
// //Assignment destructuring
// const [name1, gitHub] = profileDataArgs;

// fs.writeFile("index.html", generatePage(name1, gitHub), (err) => {
// 	if (err) throw err;
// 	console.log("Portfolio complete checkout index.html");
// });
