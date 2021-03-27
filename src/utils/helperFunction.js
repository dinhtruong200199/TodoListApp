/** @format */

function renderStyleDot(level) {
	if (level === 1) {
		return { backgroundColor: 'red' };
	}

	if (level === 2) {
		return { backgroundColor: 'orange' };
	}

	return { backgroundColor: 'green' };
}

export default {
	renderStyleDot,
};
