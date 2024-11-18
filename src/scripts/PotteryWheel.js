let primaryKey = 1;

export const makePottery = (shape, weight, height) => {
	const piece = {
		id: primaryKey,
		shape: shape,
		weight: weight,
		height: height,
	};
	primaryKey++;
	return piece;
};
