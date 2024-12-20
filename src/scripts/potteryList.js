import { usePottery } from "./PotteryCatalog.js";

export const potteryList = () => {
	const potterytoDisplay = usePottery();
	const potteryHtml = potterytoDisplay.map(
		(potteryItem) => `
   <section class="pottery" id="pottery--${potteryItem.id}">
     <h2 class="pottery__shape">${potteryItem.shape}</h2>
     <div class="pottery__properties">
       Item weighs ${potteryItem.weight} grams and is ${potteryItem.height} cm in height
     </div>
     <div class="pottery__price">Price is $${potteryItem.price}</div>
   </section>
`,
	);
	return potteryHtml.join("");
};
