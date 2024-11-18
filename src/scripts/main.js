// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./kiln.js";

// Make 5 pieces of pottery at the wheel
let mug1 = makePottery("Mug", 2, 6);
console.log(mug1);
let mug2 = makePottery("Mug", 2, 6);
console.log(mug2);
let mug3 = makePottery("Mug", 2, 6);
console.log(mug3);
let mug4 = makePottery("Mug", 2, 6);
console.log(mug4);
let mug5 = makePottery("Mug", 2, 6);
console.log(mug5);

// Fire each piece of pottery in the kiln
let fireedMug1 = firePottery(mug1, 2200);
console.log(fireedMug1);
let fireedMug2 = firePottery(mug2, 2000);
console.log(fireedMug2);
let fireedMug3 = firePottery(mug3, 2200);
console.log(fireedMug3);
let fireedMug4 = firePottery(mug4, 2300);
console.log(fireedMug4);
let fireedMug5 = firePottery(mug5, 2201);
console.log(fireedMug5);

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
