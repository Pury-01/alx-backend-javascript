// test for calculator operations
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
	describe('SUM', () => {
		it('should test sum operation', () => {
			assert.strictEqual(calculateNumber('SUM', 4.5, 6.7), 12);
		});
	});
	
	describe('SUBTRACT', () => {
		it('performs subtraction operation', () => {
			assert.equal(calculateNumber('SUBTRACT', 2.8, 1), 2);
		});
	});
	
	describe('DIVIDE', () => {
		it('should perform division', () => {
			assert.equal(calculateNumber('DIVIDE', 6, 2.9), 2);
		});
	});

	describe('DIVIDE', () => {
		it('negative division', () => {
			assert.equal(calculateNumber('DIVIDE', -8, -4.2), 2);
		});


		it('division with 0', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 6, 0.2), 'Error');
		});
	});
	

	describe('Invalid type', () => {
		it('throw an error for an invalid type', () => {
			assert.throws(() => calculateNumber('MULTIPLY', 1.2, 3.7), {
				name: 'Error',
				message: 'Invalid operation type',
			});
		});
	});
});
