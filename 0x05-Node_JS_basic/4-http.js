// small HTTP server using http module
const http = require('http');

// create http server
const app = http.createServer((req, res) => {
	// http response header
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	// send response message
	res.end('Hello Holberton School!');
});

// server listen to port 1245
app.listen(1245, () => {
	console.log('...');
});


module.exports = app;
