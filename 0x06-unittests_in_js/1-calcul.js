// function that can sum, subtract or divide two numbers
function calculateNumber(type, a, b,) {
	if (type !== 'SUM' && type !== 'SUBTRACT' && type !== 'DIVIDE') {
		throw new Error('Invalid operation type');
	}

	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('Invalid number input');
	}

	const roundedA = Math.round(a)
	const roundedB = Math.round(b)

	if (type === 'SUM') {
		return roundedA + roundedB;
	} else if (type === 'SUBTRACT') {
		return roundedA - roundedB;
	} else if (type === 'DIVIDE') {
		if (roundedB === 0) {
			return 'Error';
		}
		return roundedA / roundedB;
	}
}


module.exports = calculateNumber;
