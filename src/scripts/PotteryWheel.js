let primaryKey = 1;

export const makePottery = (shape, weight, height) => 
   ({
    id: primaryKey++,
    shape: shape,
    weight: weight,
    height: height, })
