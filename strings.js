// string character is inside of a quotation marks '' ""
const firstname = "John";
const lastname = "doe";
//   string properties determine the length of the character
console.log(firstname.length);
console.log(lastname.length);

const myPassword = "whitehouse";
console.log(myPassword);
console.log(myPassword.length);
// string concatenation also known as joining of console together
const fullname = firstname + " " + lastname;
console.log(fullname);
console.log(fullname.length);
//  string method is used to built in function that can be done on strings
const email = "jjdoe@google.co.uk";
console.log(email);
console.log(email.toUpperCase());
console.log(email.toLowerCase());

// indexOf, lastIndexOF, charAt
console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

// startsWith true or false, endsWith, includes

console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));

//trim , trimStart and trimEnd (it removes white spaces)

const username = "     ade001  ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

// 01********90
const myName = "jane doe";
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("e", "*"));

// slice is used to extract portions of a string slice substring( start, end) substr,
console.log(myName.slice(5, 8));
console.log(myName.substring(0, 3));

// substr(start,num of characters)\
console.log(myName.substr(0, 5));

const accountNumber = "2270288654";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));
console.log(accountNumber.replace(accountNumber.slice(2, 8), "******"));

const userName = "johnpaul";
console.log("welcome" + " " + userName.toUpperCase());

// concatenation
const author = "Jax Draxx";
const book = "The Ghost";

// Jax Draxx wrote the book the ghost

const sentence = author + " wrote the book" + book.toLowerCase();
console.log(sentence);

// template literals is used to format variables inside of a string

const sentence2 = `${author} wrote the book ${book.toLowerCase()}`;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam";
console.log(`${person.toUpperCase()} featured in the movie ${movie}`);

// declare a country variable set it to any value of your  choice
 
const country = "Afghanistan"
console.log(country.length);
console.log(country.toUpperCase());
console.log(country.substr(0,5));
console.log(country.startsWith("e"));
console.log(country.includes('h'));
console.log(`I live in  ${country}`);




