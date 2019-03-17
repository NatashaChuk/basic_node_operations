const fs = require("fs");

function done(output) {
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
}


function evaluateCmd(userInput) {
	
	const userInputArray = userInput.split(" ");
	const command = userInputArray[0];

	switch (command) {
		case "echo":

			commandLibrary.echo(userInputArray.slice(1).join(" "));
			break;
		
		case "cat":
			commandLibrary.cat(userInputArray.slice(1));
			break;
	}
}

const commandLibrary = {

	"echo": function(userInput) {
		done(userInput);
	},

	"cat": function(fullPath) {
		const fileName = fullPath[0];
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			done(data);
		});
	},

	"head": function(fullPath) {
		const fileName = fullPath[0];
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			data = data.toString().split("\n");
			data.length = 10;
			const stringData = data.join("\n");
			done(stringData);
		});
	},

	"tail": function(fullPath) {
		const fileName = fullPath[0];
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			data = data.toString().split("\n").reverse();
			data.length = 10;
			data.reverse();
			const stringData = data.join("\n");
			console.log(stringData);
		});
	}
};


module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;