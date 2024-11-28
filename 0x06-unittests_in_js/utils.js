// it exports the utils object with calculateNumber function
const Utils = {
	calculateNumber: (type, a, b) => {
		if (type === 'SUM') {
			return Math.round(a) + Math.round(b);
		}
		if (type === 'SUBTRACT') {
			return Math.round(a) - Math.round(b);
		}
		if (type === 'DIVIDE') {
			const brounded = Math.round(b);
			if (brounded === 0) {
				return 'Error';
			}
			return Math.round(a) / brounded;
		}
		throw new Error('Invalid operation type');
	},
};

module.exports = Utils;
