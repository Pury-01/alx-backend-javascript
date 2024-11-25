// program that asks for name when executed on cli
// import readline to handle input/ooutput
const readline = require('readline');

// create interface for reading input from sttdin
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Welcome to Holberton School, what is your name?\n", (name) => {
	console.log(`Your name is: ${name}`);
	r1.close(); // close interface
});

r1.on('close', () => {
	console.log("This important software is now closing");
	process.exit(0);
});
