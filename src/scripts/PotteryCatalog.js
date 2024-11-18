let potteryToBeSold = [];

export const toSellOrNotToSell = (potteryObj) => {
	let potteryPiece = { ...potteryObj };
	if (potteryPiece.weight >= 6) {
		potteryPiece = { ...potteryPiece, price: 40 };
	} else {
		potteryPiece = { ...potteryPiece, price: 20 };
	}
	if (!potteryPiece.cracked) {
		potteryToBeSold.push(potteryPiece);
	}
};

export const usePottery = () => {
	return [...potteryToBeSold];
};
