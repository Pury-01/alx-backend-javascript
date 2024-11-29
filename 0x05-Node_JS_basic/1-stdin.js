// Import the readline module
const readline = require('readline');

// Create an interface for reading input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
rl.on('line', (input) => {
  // Log the user's name
  console.log(`Your name is: ${input}`);
  rl.close(); // Close the readline interface after processing input
});

// Handle the `close` event
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0); // Exit the program
});
