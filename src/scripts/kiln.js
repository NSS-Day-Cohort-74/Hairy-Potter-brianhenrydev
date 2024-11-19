export const firePottery = (potteryObj, firingTemp) => 
   ({ ...potteryObj, fired: true, cracked: firingTemp > 2200})

