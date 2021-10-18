const fs = require("fs");
const { createPromptModule } = require("inquirer");

//function writeFile() to return new promise
const writeFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/index.html", fileContent, (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: "file created",
			});
		});
	});
};

const copyFile = () => {
	return new Promise((resolve, reject) => {
		fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: "file Copied",
			});
		});
	});
};

// //Export the functions
// module.exports = {
// 	writeFile: writeFile,
// 	copyFile: copyFile,
// };

//OR USE SHORTHAND PROPERTYNAMES

module.exports = {
	writeFile,
	copyFile,
};

//TEST CODE
// const filedata = "Hello I am file data";

// writeFile(filedata)
// 	.then((succResponse) => {
// 		console.log(succResponse);
// 	})
// 	.catch((errResponse) => {
// 		console.log(errResponse);
// 	});
