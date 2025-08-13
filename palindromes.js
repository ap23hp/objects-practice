
// Write a function that determines whether or not a given string is a palindrome.

// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

// some palindromes:
// A car, a man, a maraca.
// Rats live on no evil star.
// Lid off a daffodil.
// Animal loots foliated detail of stool lamina.
// A nut for a jar of tuna.

function palindrome(str) {
  let newStr = str
    .toLowerCase()
    .split("")
    .filter(function (ele) {
      return ele !== " " && ele !== "," && ele !== ".";
    })
    .join("");

  let reversed = newStr.split("").reverse().join("");
  return newStr === reversed;
}

console.log(palindrome("A car, a man, a maraca")); // true

//another efficient method 
//Two-pointer method - hum string ko reverse karke compare nahi karte,
//balki start aur end se ek-ek char check karte hain aur middle tak chalte hain.

function palindrome(str) {
  // Step 1: Lowercase + unwanted chars remove (no regex)
  let cleanStr = str
    .toLowerCase()
    .split("")
    .filter(function (ch) {
      return ch !== " " && ch !== "," && ch !== ".";
    })
    .join("");

  // Step 2: Two-pointer check
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false; // mismatch found
    }
    left++;
    right--;
  }

  return true; // all matched
}

console.log(palindrome("A car, a man, a maraca")); // true
console.log(palindrome("Hello")); // false

//moreoptimised
function palindrome(str) {
  let newStr = str.toLowerCase();
  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    // Agar left wala char space/comma/dot hai → skip
    if (newStr[left] === " " || newStr[left] === "," || newStr[left] === ".") {
      left++;
      continue;
    }
    // Agar right wala char space/comma/dot hai → skip
    if (newStr[right] === " " || newStr[right] === "," || newStr[right] === ".") {
      right--;
      continue;
    }
    // Compare actual characters
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindrome("A car, a man, a maraca")); // true
console.log(palindrome("Hello")); // false

// newStr = newStr.split("") // array ban gaya (memory 1)
// .filter(...)              // new filtered array ban gaya (memory 2)
// .join("")                 // new string ban gayi (memory 3)
// Har step pe ek naya data structure ban raha tha — iska matlab extra memory use.

//  Pointer method me kya hota hai?
// let left = 0;
// let right = str.length - 1;
// // hum sirf index move kar rahe hain
// Koi naya array/string create nahi ho raha
// Hum sirf original string ke reference ke saath kaam kar rahe
// Isliye memory use kam hota hai