export const firePottery = (potteryObj, firingTemp) => {
	let isCracked = false;
	if (firingTemp > 2200) {
		isCracked = true;
	}
	const firedPottery = { ...potteryObj, fired: true, cracked: isCracked };
	return firedPottery;
};
