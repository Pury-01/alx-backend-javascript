// complex HTTP server using Node's HTTP module
// import http module and fuunction from 3-read_file_async.js
const http = require('http');
const countStudents = require('./3-read_file_async');

// get database file path from cl arguments
const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // route route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // overide console.log to capture otput
    let output = '';
    const originalLog = console.log;
    console.log = (message) => {
      output += `${message}\n`;
    };

    // call countStudents and handle asynchronous response
    countStudents(databasePath)
      .then(() => {
        res.end(output);
      })
      .catch((error) => {
        res.end(error.message);
      })
      .finally(() => {
        console.log = originalLog;
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// listen on port 1245
app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
