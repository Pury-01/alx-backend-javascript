// tests for the asynchronous getPaymentTokenFromAPI function
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.be.an('object'); // Check if the response is an object
                expect(response).to.have.property('data'); // Check if the object has a `data` property
                expect(response.data).to.equal('Successful response from the API'); // Verify the value
                done(); // Mark the test as done
            })
            .catch((err) => done(err)); // Catch any unexpected error
    });
});
