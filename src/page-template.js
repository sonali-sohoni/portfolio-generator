const generatePage = (name, gitHubName) => {
	return `
  <!DOCTYPE html>
<html lang="en">
	<head>
		<title>MyProfile</title>
		<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
	</head>
	<body>
  <h1>${name}</h1>
  <h2><a href ="https://github.com/${gitHubName}">GitHub</a></h2>

	</body>
</html>
  `;
};

module.exports = generatePage;