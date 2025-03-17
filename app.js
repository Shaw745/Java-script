// { elemnent, element2,element3}
// arrays usually contains the datatypes
//  empty arrays are falsy value
const students = ["david", "quadri", "isaac", "uju", "johnpaul"];
// array properties - length
console.log(students);
console.log(students.length);
// getting elements from an array , position
console.log(students[0]);
console.log(students[2]);
// change elements in an array, position
students[0] = "azeez";
console.log(students);
students[0] = "emeka";
students[students.length - 1] = "john doe";
console.log(students);

// array methods
// add and rwmovw elements from an array
// structured data type stack LIFO
// push, unshift (add elements to an)
students.push("michael");
students.push("juwon");
students.unshift("uthman");

// pop and shift
students.pop();
students.shift();
console.log(students);

// includes
console.log(students.includes("emeka"));

console.log(students.indexOf("isaac"));
console.log(students.lastIndexOf("isaac"));
console.log(students.at(2));

// extracting portion of an array - slice(start and end)
console.log(students.slice(0, 3));
console.log(students.slice(4, 7));

// method to convert arrays to strings
//  join , toString
console.log(students.join("-"));
//  another seperator can be used

console.log(students.toString());

// iterator methods
// higher oder methods ( functions) -
// it needs another functiona as a paramater
//  forEach, map, find, filter, some, every, reduce

//  forEach - executes a function for every element in an array
students.forEach((students) => {
  console.log(students.toUpperCase);
});

// give  me the first letter of every students name in the students arrays

students.forEach((students) => {
  console.log(students.charAt);
});

// map method - it creates a new array with the result of a function

const smalCaseStudents = students.map((students) => {
  return students.toLowerCase();
});
console.log(smalCaseStudents);

// filter- it gives us new arays with element that passes a test or search condition

const myNums = [8, 6, 5, 4, 3, 6, 3, 5, 5];

//  > 5

const greaterThan5 = myNums.filter((num) => {
  return num > 5;
});
console.log(greaterThan5);

const anyNum = [2, 3, 5, 3, 2, 3, 4, 5, 6, 7, 6, 88];

const evenNumber = anyNum.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumber);
const oddNumber = anyNum.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNumber);

const lengthGreaterthan6 = students.filter((students) => students.length > 6);
console.log(lengthGreaterthan6);

// find returns the First element that passses a test (search condition)

const findgreaterthan6 = myNums.find((num) => num > 5);
console.log(findgreaterthan6);

const favStudent = students.find((students) => students.length === 3);
console.log(favStudent);

// some - returns true if at least one of every element passes a test
const ifSomeGreater5 = myNums.some((num) => num > 5);
console.log(ifSomeGreater5);

// and every - returns true if all element passes a test
const ifallGreater5 = myNums.every((num) => num > 5);
console.log(ifallGreater5);

// reverse, sort, concat, reduce
// string split

const carBrands = ["Toyota", "Rollroyce", "Ferrari", "Tesla", "BMW"];
console.log(carBrands.reverse());
console.log(carBrands.sort());
console.log(carBrands.sort().reverse());

// sorting numbers 0 - up up to -0
const prices = [200, 4000, 650, 100, 3500];
console.log(prices.sort()); //buggy
console.log(prices.sort((a, b) => a - b)); //smallest to largest
console.log(prices.sort((a, b) => b - a)); //highest to low

//  reduce = reduces every element in an array to a single value
// two parameters, cb function, start points
const totalPrice = prices.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(totalPrice);

//concat
const africanCountries = ["Togo", "Mauritius"];
const asianCountries = ["Singapore", "Japan", "South Korea"];

const holidayLocations = africanCountries.concat(asianCountries);
console.log(holidayLocations);

const fruits = "banana";
// split method on a string
console.log(fruits.split(""));
console.log(fruits.split("a"));

// write a function that reverse the letter in a word
// cat -- tac
const reverseWord = (word) => {
  return word.split("").reverse().join("");
};
console.log(reverseWord("cat"));
console.log(reverseWord("gel"));

// palindrome- words that are spelt the same
// madam level tat noon pap eye

function ispalindrome(word) {
  // default to a standard (lowercase, uppercase)
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}
console.log(ispalindrome("Madam"));

// SET - unique values in an array
const users = ["John", "Dave","Nate", "John", "Dave", "sam", "nate"];
console.log(new Set(users));

//  destructuring
// complex data structures 

