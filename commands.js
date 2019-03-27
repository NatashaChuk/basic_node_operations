const fs = require("fs");

function done(output) {
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
}


function evaluateCmd(userInput) {
	
	const userInputArray = userInput.split(" ");
	const command = userInputArray[0];

	switch (command) {
		default:
			errorHandler();
			break;

		case "echo":
			commandLibrary.echo(userInputArray.slice(1).join(" "));
			break;

		case "cat":
			commandLibrary.cat(userInputArray.slice(1));
			break;

		case "head";
			commandLibrary.head(userInputArray.slice(1));
			break;

		case "tail";
			commandLibrary.tail.(userInputArray.slice(1));
			break;

	}
}


function errorHandler() {
	done('Command not known');
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
			data.length = 5;
			const stringData = data.join("\n");
			
			done(stringData);
		});
	},

	"tail": function(fullPath) {
		const fileName = fullPath[0];
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			data = data.toString().split("\n").reverse();
			data.length = 5;
			data.reverse();
			const stringData = data.join("\n");
			console.log(stringData);
		});
	}
};


module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;