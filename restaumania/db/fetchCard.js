var fs = require('fs');
var chalk = require('chalk');

fs.readFile(__dirname + "/restCard.json", function (err, data){
	data = data.toString();
	data = JSON.parse(data);

	for(var i=0; i<data.length; i++){
		console.log(chalk.red(data[i].rname) + " (" + chalk.yellow(data[i].resid) + "): " + data[i].catname + " - " + data[i].scatname + ": " + data[i].price + " - " + data[i].entry + " (" + data[i].edetails + ")");
	}
});