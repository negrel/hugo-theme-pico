const units = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64],
	inset = {
		'0': '0rem',
		'full': '100%',
	};

// 0 - 64
for (unit of units) {
	inset[`${unit}`] = `${unit * 0.25}rem`;
}

// -64 0
for (unit of units) {
	inset[`-${unit}`] = `${-unit * 0.25}rem`;
}

// percentage (%)
for (let i = 2; i <= 6; i++) {
	for (let j = 1; j < i; j++) {
		inset[`${j}/${i}`] = `${(j / i) * 100}%`;
	}
}

for (let j = 1; j < 12; j++) {
	inset[`${j}/${12}`] = `${(j / 12) * 100}%`;
}

module.exports = inset;