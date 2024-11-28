// route for Id endpoint
const express = require('express');
const app = express();

// Define the route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define the new /cart/:id route
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  // Check if the id is a valid number using a regex
  if (/^\d+$/.test(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// Create the server and listen on port 7865
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Export the server instance for use in tests
module.exports = server;
