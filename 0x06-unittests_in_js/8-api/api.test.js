// mocha test for the root endpoint
const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Index page', () => {
  let server;

  // Start the server before running the tests
  before((done) => {
    server = require('./api'); // Import the api.js file
    done();
  });

  // Stop the server after tests are complete
  after((done) => {
    server.close();
    done();
  });

  it('should return correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Status code should be 200
      done();
    });
  });

  it('should return the correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Correct message
      done();
    });
  });
});
