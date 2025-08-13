// create a function that returns a specific member of the Fibonacci sequence:

// A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. In this
//  exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8

const fibonacci = function (num) {
  // Convert string numbers to actual numbers
  num = Number(num);

  // Handle invalid input
  if (num <= 0 || isNaN(num)) return "OOPS";

  let arr = [1, 1];

  // Start building from the 3rd number
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  // Return the nth Fibonacci number
  return arr[num - 1];
};

// console.log(fibonacci(4));  // 3
// console.log(fibonacci("6")); // 8
// console.log(fibonacci(-2));  // OOPS

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];
//Your job is to write a function that takes the array and returns an array of titles:
function getTheTitles(arr) {
  return arr.map(function (ele) {
    return ele.title;
  });
}
console.log(getTheTitles(books)); // ['Book','Book2']

//Given an array of objects representing people with a birth and death year, return the oldest person.
//You should return the whole person object,
const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (arr) {
const ages= arr.map((ele)=> ele.yearOfDeath ? ele.yearOfDeath-ele.yearOfBirth : new Date().getFullYear()-ele.yearOfBirth)
console.log(ages)
let maxAge= ages.reduce((acc,curr)=>acc<curr ? acc=curr : acc,0)
let oldestageindex= ages.indexOf(maxAge)
return arr[oldestageindex]


};


console.log(findTheOldest(people))