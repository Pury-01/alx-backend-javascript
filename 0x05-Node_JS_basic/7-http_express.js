// small HTTP server using Express
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Function to count students and their fields
const countStudents = (database) => new Promise((resolve, reject) => {
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(',')).filter((cols) => cols.length === 4);

    const summary = {};
    students.forEach(([firstName, , , field]) => {
      if (!summary[field]) {
        summary[field] = [];
      }
      summary[field].push(firstName);
    });

    const output = [
      `Number of students: ${students.length}`,
      ...Object.entries(summary).map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`),
    ];

    resolve(output);
  });
});

// Route for "/"
app.get('/', (req, res) => res.send('Hello Holberton School!'));

// Route for "/students"
app.get('/students', async (req, res) => {
  let database = process.argv[2];

  if (!database) {
    database = path.join(__dirname, 'students.csv');
  }

  try {
    const summary = await countStudents(database);
    res.send(`This is the list of our students\n${summary.join('\n')}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('...');
});

// Export app for testing
module.exports = app;
