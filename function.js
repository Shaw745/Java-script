// function
function logger() {
  console.log("Hello world");
}
logger();

logger();

// function welcomeUser() {
//     console.log("welcome user");
// }
// welcomeUser();

function welcomeUser(name = "Anon") {
  console.log(`welcome ${name}`);
}

welcomeUser("adams");
welcomeUser("samantha");
welcomeUser("shaydee");

function addTwoNumbers(n1 = 0, n2 = 0) {
  const total = n1 + n2;
  console.log(total);
}
addTwoNumbers(34, 20);
addTwoNumbers(8, 92);
addTwoNumbers(7);

function subtractTwoNumbers(n1, n2) {
  console.log(n1 - n2);
}
subtractTwoNumbers(90, 5);
subtractTwoNumbers(2, 5);

welcomeUser();

function wordconverteer(word = "word") {
  console.log(word.toUpperCase());
}

wordconverteer("cat");
wordconverteer("fish");

function replaceAlle(word) {
  console.log(word.replaceAll("e", "*"));
}
replaceAlle("elementary");

function checkLength(word) {
  console.log(word.length);
}

checkLength("julius");

function firstcharact(word) {
  console.log(word.charAt(0));
}
firstcharact("parenthood");

function initialNames(name1, name2) {
  console.log(name1.charAt(0) + name2.charAt(0));
}
initialNames("Bryan", "Shaw");

function letters(word) {
  console.log(word.substr(1, 5));
}
letters("ahsdnjhidfgujwhdfy");

function type(number) {
  number > 0 ? console.log("positive") : console.log("negative");
}
type(758);

function sayHello() {
  return "say hello";
}
const val = sayHello();
console.log(val);

function multiplyTwoNums(N1, N2) {
  return N1 * N2;
}
console.log(multiplyTwoNums(77, 88));

function multiplyTreeNums(N1, N2, N3) {
  return (N1 + N2 + N3) / 3;
}
console.log(multiplyTreeNums(77, 88, 787));

function weekToDays(weeks) {
  return weeks * 7;
}

console.log(weekToDays(2));

function hoursToMins(time) {
  return time * 60;
}
console.log(hoursToMins(1));

function yearsToMonth(years) {
  return `${years} years is equal to ${years * 12} months`;
}
console.log(yearsToMonth(2));

function forty() {
  return 40;
}
console.log(forty());

const myName = function () {
  return "john";
};
console.log(myName());

const divideTwoNums = function (n1, n2) {
  return n1 / n2;
};
console.log(divideTwoNums(10, 2));

console.log(divideTwoNums(9, 3));

removealla("email");
function removealla(word) {
  console.log(word.replace("a", " "));
}

const myArrowfunc = () => {
  console.log("Arrow Function");
};
myArrowfunc();

const checkWinner = (scoreA, scoreB) => {
  if (scoreA > scoreB) {
    return "Score A wins";
  } else if (scoreA < scoreB) {
    return " score B wins";
  } else {
    return " it is a draw";
  }
};
console.log(checkWinner(56, 92));

const calculateBmi = (bodyMass, height) => {
  let BMI = bodyMass / height ** 2;
  return BMI.toFixed(2);
};
console.log(calculateBmi(70, 1.75));

const getBmiCategory = (BMI) =>{
if (BMI <= 18.5) {
  return "underweight";
} else if (BMI > 18.5 && BMI <= 24.9) {
  return "Normal weight";
} else if (BMI >= 25 && BMI <= 29.9) {
  return "overweight";
} else console.log("obese");
};
console.log(getBmiCategory(calculateBmi(70, 1.75)));
