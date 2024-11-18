// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { potteryList } from "./potteryList.js";

let potteryListEl = document.querySelector(".potteryList");

// Make 5 pieces of pottery at the wheel
let piece1 = makePottery("Mug", 2, 6);
let piece2 = makePottery("Plate", 6, 6);
let piece3 = makePottery("Tea Pot", 9, 6);
let piece4 = makePottery("Vase", 3, 6);
let piece5 = makePottery("Cup", 2, 6);

// Fire each piece of pottery in the kiln
let firedPiece1 = firePottery(piece1, 200);
let firedPiece2 = firePottery(piece2, 2000);
let firedPiece3 = firePottery(piece3, 2300);
let firedPiece4 = firePottery(piece4, 2200);
let firedPiece5 = firePottery(piece5, 2201);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedPiece1);
toSellOrNotToSell(firedPiece2);
toSellOrNotToSell(firedPiece3);
toSellOrNotToSell(firedPiece4);
toSellOrNotToSell(firedPiece5);

// Invoke the component function that renders the HTML list
//
//
const potteryHTML = potteryList();
potteryListEl.innerHTML = potteryHTML;
