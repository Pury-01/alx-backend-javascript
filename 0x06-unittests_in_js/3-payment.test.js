// test sendPaymentRequestToApi function using sinon.spy
const sinon = require('sinon');
const Utils  = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const chai = require('chai');
const expect = chai.expect;


describe('sendPaymentRequestToApi', () => {
	it('should call Utils.calculateNumber', () => {
		// create spy for Utils.calculateNumber
		const spy = sinon.spy(Utils, 'calculateNumber');

		// call the function to test
		sendPaymentRequestToApi(100, 20);

		// check if spy was called only once & validate the arguments
		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWith('SUM', 100, 20)).to.be.true;

		// restore the spy
		spy.restore();
	});
});
