let packingList = [];
let cloudy = true;
//let cloudy = false;

// if statement is used to check if the weather is cloudy
if (cloudy) {
  packingList.push("umbrella");
}  /* else statement*/ else {
  packingList.push("sunglasses");
}
let tempF = 66;
if (tempF < 50) {
  packingList.push("jacket");
} else if (tempF < 65) {
  packingList.push("sweater");
} else packingList.push("water bottle");
console.log("Your weather-based packing list is:\n" + packingList);

