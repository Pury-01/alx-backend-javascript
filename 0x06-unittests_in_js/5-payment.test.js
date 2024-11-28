const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    // Set up the spy before each test
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    // Restore the spy after each test
    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log "The total is: 120" and call console.log once', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnce).to.be.true; // Check if console.log was called once
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true; // Check the correct message
    });

    it('should log "The total is: 20" and call console.log once', () => {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnce).to.be.true; // Check if console.log was called once
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true; // Check the correct message
    });
});
