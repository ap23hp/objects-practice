// The goal for this exercise is to create a calculator that does the following:
//add, subtract, get the sum, multiply, get the power, and find the factorial

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (...arg) {
  return arg.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (...arg) {
  return arg.reduce((acc,curr)=>acc*curr,1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let num = 1;
  for (let i = a; i > 0; i--) {
    (num = num* i);
  }
  return num
};

console.log(factorial(4));
// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
