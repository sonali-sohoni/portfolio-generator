const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log("1", profileDataArgs);

const printProfileData = (profileDataArr) => {
	profileDataArr.forEach((element) => {
		console.log(element);
	});
};

printProfileData(profileDataArgs);
