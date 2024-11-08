// Part 1: Math Problems

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Implementation of Part 1
// 1. Check if all numbers are divisible by 5
const divideByFive = (num) => {
  return num % 5 === 0;
};
const isN1DivisibleBy5 = divideByFive(n1);
const isN2DivisibleBy5 = divideByFive(n2);
const isN3DivisibleBy5 = divideByFive(n3);
const isN4DivisibleBy5 = divideByFive(n4);
console.log(
  `Check if ${n1} is divisible by 5 and the answer is ${isN1DivisibleBy5}`
);
console.log(
  `Check if ${n2} is divisible by 5 and the answer is ${isN2DivisibleBy5}`
);
console.log(
  `Check if ${n3} is divisible by 5 and the answer is ${isN3DivisibleBy5}`
);
console.log(
  `Check if ${n4} is divisible by 5 and the answer is ${isN4DivisibleBy5}`
);

// 2. Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(
  `Check if ${n1} is larger than ${n4} and the answer is ${isFirstLargerThanLast}`
);

// 3. Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const arithmeticChain = (n1, n2, n3, n4) => {
  let result = ((n1 - n2) * n3) % n4;
  return result;
};
let outcome = arithmeticChain(n1, n2, n3, n4);
console.log(`The result of this arithmetic chain is ${outcome}`);

// 4. Change the way that isOver25 calculates
const isOver25 = (num) => {
  return num > 25;
};
const isn1Over25 = isOver25(n1);
const isn2Over25 = isOver25(n2);
const isn3Over25 = isOver25(n3);
const isn4Over25 = isOver25(n4);
console.log(`Check if ${n1} is over 25 and the answer is ${isn1Over25}`);
console.log(`Check if ${n2} is over 25 and the answer is ${isn2Over25}`);
console.log(`Check if ${n3} is over 25 and the answer is ${isn3Over25}`);
console.log(`Check if ${n4} is over 25 and the answer is ${isn4Over25}`);

// Part 2: Practical Math

const totalDistance = 1500;
let budget = 175;
const fuelCost = 3;
// 50 gallon for 55 miles - ok - 27.27 hours
// 53.57 gallon for 60 miles - ok - 25
// 65.21 gallon for 75 miles - not ok - 20

const tripCalculation = (speed, milePerGallon) => {
  // Calculate gallon of fuel needed
  let gallonNeed = totalDistance / milePerGallon;

  //   Check if the budget is enough
  let total = gallonNeed * fuelCost;
  budgetResult = "";
  if (budget >= total) {
    budgetResult = "enough";
  } else {
    budgetResult = "not enough";
  }

  //   Calculate how long the trip will be
  let hours = totalDistance / speed;
  console.log(
    `At ${speed} miles per hour, you need ${gallonNeed} gallon of fuel. You need to pay $${total} for your gas, which means you have ${budgetResult} budget. Also, it will take ${hours} hours to your destination`
  );
};

tripCalculation(55, 30);

// Part 3: Future Exploration
