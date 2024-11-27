// test for calculateNumber function
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
	it('should return 3 for inputs 1 and 2', () => {
		assert.equal(calculateNumber(1, 2), 3);
	});
	
	it('should round off decimals 2.5 and 5.1', () => {
		assert.equal(calculateNumber(2.5, 5.1), 8);
	});

	it('correctly sum inputs with one whole number', () => {
		assert.equal(calculateNumber(3.2, 9), 12);
	});

	it('handles negatives floats too', () => {
		assert.equal(calculateNumber(-2.8, -5.1), -8);
	});
});
