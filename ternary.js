const myNumber = 732;

myNumber > 0 ? console.log("positive") : console.log("Negative");

const aNumber = 328;
aNumber % 2 === 0 ? console.log("Even number") : console.log("Odd number");

let hasAcar = true;
let sentence = `Mr Mario ${hasAcar ? "has" : "does not have"} a car`;
console.log(sentence);

let isUserLoggedIn = true;
isUserLoggedIn ? console.log("welcome back") : console.log("logged out");
let balance = 20000;
let loanAmount = 45000;

loanAmount <= balance * 2
  ? console.log(" user is eligible")
  : console.log(" not eligible");

let savings = 23000;
let transactionAmount = -1;

savings >= transactionAmount
  ? console.log(" transaction succesful")
  : console.log(" Failed");

transactionAmount > 0
  ? console.log(`credit alert of ${transactionAmount}`)
  : console.log(`debit alert of ${transactionAmount}`);

savings += transactionAmount;
console.log(savings);

