const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define the /cart/:id route with regex validation
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (/^\d+$/.test(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// Define the /available_payments route
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Define the /login route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing username');
  }
});

// Create the server and listen on port 7865
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Export the server instance for use in tests
module.exports = server;
