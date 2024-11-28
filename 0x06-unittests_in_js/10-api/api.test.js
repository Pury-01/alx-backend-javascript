const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe('Index page', () => {
  let server;

  // Start the server before running the tests
  before((done) => {
    server = require('./api'); // This imports the server instance
    done();
  });

  // Stop the server after tests are complete
  after((done) => {
    server.close(); // This should close the server if it's the correct instance
    done();
  });

  it('should return correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Ensure status code is correct
      done();
    });
  });

  it('should return the correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Correct message
      done();
    });
  });

  describe('Cart page', () => {
    it('should return correct status code when :id is a number', (done) => {
      request('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 status code when :id is NOT a number', (done) => {
      request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        expect(body).to.equal('Not Found');
        done();
      });
    });
  });

  describe('Available Payments', () => {
    it('should return correct status code and payment methods', (done) => {
      request('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expected); // Deep equality comparison
        done();
      });
    });
  });

  describe('Login', () => {
    it('should return the correct welcome message for a valid userName', (done) => {
      const payload = { userName: 'Betty' };
      request.post(
        {
          url: 'http://localhost:7865/login',
          json: payload
        },
        (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Betty');
          done();
        }
      );
    });

    it('should return a 400 error if userName is missing', (done) => {
      const payload = {};
      request.post(
        {
          url: 'http://localhost:7865/login',
          json: payload
        },
        (error, response, body) => {
          expect(response.statusCode).to.equal(400);
          expect(body).to.equal('Missing username');
          done();
        }
      );
    });
  });
});

