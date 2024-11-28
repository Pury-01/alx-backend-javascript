// implementation of ttest with a stub and a spy
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should stub Utils.calculateNumber and spy on console.log', () => {
        // Stub Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        const consoleSpy = sinon.spy(console, 'log');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Assert the stub was called with correct arguments
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

        // Assert the spy logged the correct message
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

        // Restore the stub and the spy
        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
