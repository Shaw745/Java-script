


function calcSumOfNum() {
    const num1 = prompt ('Enter first number:')
     const num2 = prompt("Enter second number:");
    console.log(parseInt (num1) + Number (num2));
    }

    calcSumOfNum();


    const num = 90;
    console.log(typeof num);
    console.log(typeof num.toString);
    console.log(typeof String(num));


    const myStr = '30';
    console.log( typeof myStr);
    console.log(typeof Number(myStr));
    console.log(typeof parseInt(myStr));
    console.log(parseInt(myStr) * 2);

    function question() {
  let name = prompt("who are you");
  if (name === null) {
    alert("Cancelled");
  } else if (name == "Dami") {
    let password = prompt("Enter your password:");
    if (password == "javascript") {
    }
    alert("Welcome user");
  } else if (password !== "javascript") {
    alert("wrong password");
  } else {
    alert("I don't know you");
  }
}

// TYPE COERCION - force
console.log("2" + 4);// 24
console.log("2" * 4);// 8
console.log(4 + "8" + 2);
console.log("4" - "4");

//  whenever a string is involved with + ---> a string concatetion e.g "50" + 4 = "504"
// hpwever a valid Number string "24" is involved with other
// math operators - corced to behave as a number e.g "50" - 5 = 45
// a mon valid number strring e.g "ade" involved with math operators except + would result to NaN when used e.g "ade" - 5 = NaN




    
    
    



