// conditional statement
// if statement
//  if( condition true){
// lines of code }
//  unless the condition is true that's the only way you can run the ines of code

if ( true)
{ console.log('Hello World');

}

// 18+ // YOU ARE ELIGIBLE TO VOTE

const age= 24;

if (age >= 18) {
    console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password = "dhyfgyudgy"

if (password.length >=9) {
    console.log('strong password');
}

// if else statement

if (false) {
    console.log("hello class");
}
else {
    console.log("goodbye class");
    
}

if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}
else {
    console.log(" you are not eligible");
    
}
 


if (password.length <= 8) {
  console.log("strong password");
}
 else {
    console.log( " weak password");
    
 }

let balance = 200000;
let withdrawalAmount = 300000;

if (withdrawalAmount<=balance) {
    console.log(" transaction succesful");
}
else {
    console.log("insufficient funds");
}


let userpin = 1234;

let enteredpin = 1236

if (userpin === enteredpin) {
  console.log("correct pin");
} else {
  console.log("incorrect pin");
}

const email = "shiay@global.com"

if (email.includes("@"))
 {
    console.log("valid");
    
} else{
    console.log("Invalid");
}
    let score = 70;
 let passedMark = 40
if ( passedMark >= 50 ) { console.log("pass");    
}
else {
    console.log("failed");
    
}
let number = 7;
 
if (number < 8 ) {
    console.log("POSITIVE");
}
else  { console.log("Negative");
    
}
let num1 = 90
let num2 = 903474

if (num1 > num2) { 
    console.log(`${num1} is greater than ${num2}`);  
}
else {console.log( `${num2} is greater than ${num1}`);
}
    
let numberr =87;

if ( numberr % 2 ==0)
{ console.log("even numbers");

}   

else {console.log( 'odd nnumbers');
}

const purchaseAmount = 600;

if ( purchaseAmount > 100){
    console.log('You have a discount');
}
else {
    console.log( " buy more ");
}

let averageA = ( 54 + 56 + 78) / 3;
console.log(averageA);

let averageB = (67 + 60 + 82) / 3;
console.log(averageB);

if (averageA>averageB) {
    console.log("Team A wins");
}
 else {
    console.log("Team B Wins");
 }

 let timeofDay = 13;

 if ( timeofDay > 10 && timeofDay <= 16) {
 console.log( " you should be in class");
 }
 else {
    console.log(" Be at Home");
 }

let withdrawalAmountA = 3000;
if (withdrawalAmountA > 2500) {
  console.log("charges is 100");
}else {
  console.log("charges is 50");
}

let Word = "philosophy"
if (Word.includes("a") || Word.includes("e") || Word.includes("o") || Word.includes("i") || Word.includes("u") ) {
  console.log("The word is a vowel");
}else {
  console.log("The word is consonant");
}

const scoreA = 100;
const scoreB = 100;

if (scoreA > scoreB) {
  console.log("A wins");
}else if (scoreB > scoreA) {
  console.log("B wins ");
}else {
  console.log("It is a Draw");
}
 
const movieRating = 6.5;

if (movieRating >= 8) {
  console.log("Excellent movie");
} else if (movieRating >= 6) {
  console.log("good movie");
} else if (movieRating >= 5) {
  console.log("Average movie");
} else{
  console.log("bad movie");
}
 
 const userAge = 37;

 if (userAge<60) {console.log("adult club");
 }
 else if (userAge>60) { console.log("old peoples club");
 }
 else console.log("young club");
 
 let word = "CAT".toLowerCase();

 // includes l0gical or
 if (
   word.includes("a") ||
   word.includes("e") ||
   word.includes("o") ||
   word.includes("i") ||
   word.includes("u")
 ) {
   console.log("The word is a vowel");
 } else {
   console.log("The word is consonant");
 }
 
// if(email && password){
//     if(email is registered){
//         if(password is correct){
//             // login
//         }else{
//             console.log('Incorrect pass');
            
//         }

//     }else{
//         console.log('please register');
        
//     }

// }else{
//     console.log('provide your email and password');
// }


const grade = "p";

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");

    break;

  case "B":
  case "b":
    console.log("Very good");
    break;

  case "C":
  case "c":
    console.log("good");

    break;

  case "D":
  case "d":
    console.log("Fair");
    break;

  case "E":
  case "e":
    console.log("Passed");

    break;

  case "F":
  case "f":
    console.log("Failed");
    break;

    default:
        console.log("repeat class");
        
    break;
}