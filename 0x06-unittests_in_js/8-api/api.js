const express = require('express');
const app = express();

// definethe route for the root endpoint
app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
});

// set up the server to listen on port 7865
const server = app.listen(7865, () => {
	console.log('API available on localhost port 7865');
});

module.exports = server;
