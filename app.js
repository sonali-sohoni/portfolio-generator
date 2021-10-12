const profileDataArgs = process.argv.slice(2, process.argv.length);
const fs = require("fs");
const generatePage = require("./src/page-template.js");
console.log(generatePage);
//Assignment destructuring
const [name1, gitHub] = profileDataArgs;

fs.writeFile("index.html", generatePage(name1, gitHub), (err) => {
	if (err) throw err;
	console.log("Portfolio complete checkout index.html");
});
