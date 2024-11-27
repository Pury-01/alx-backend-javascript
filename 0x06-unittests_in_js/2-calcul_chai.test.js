// test for calculator operations
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
	describe('SUM', () => {
		it('should test sum operation', () => {
			expect(calculateNumber('SUM', 4.5, 6.7)).to.equal(12);
		});
	});
	
	describe('SUBTRACT', () => {
		it('performs subtraction operation', () => {
			expect(calculateNumber('SUBTRACT', 2.8, 1)).to.equal(2);
		});
	});
	
	describe('DIVIDE', () => {
		it('should perform division', () => {
			expect(calculateNumber('DIVIDE', 6, 2.9)).to.equal(2);
		});
	});

	describe('DIVIDE', () => {
		it('negative division', () => {
			expect(calculateNumber('DIVIDE', -8, -4.2)).to.equal(2);
		});


		it('division with 0', () => {
			expect(calculateNumber('DIVIDE', 6, 0.2)).to.equal('Error');
		});
	});
	

	describe('Invalid type', () => {
		it('throw an error for an invalid type', () => {
			expect(() => calculateNumber('MULTIPLY', 1.2, 3.7)).to.throw('Invalid operation type');
		});
	});
});
