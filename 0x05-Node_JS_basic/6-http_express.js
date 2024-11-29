// Import the Express module
const express = require('express');

// instance of Express application
const app = express();

// define the endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// make server listen on port 1245
app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
