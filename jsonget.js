try {
  console.log(age);
  // do something
} catch (error) {
  //  handle the error
  // error message
  console.log(error.message);
}

// optional chaining
const person = {
  name: "bob",
  age: 76,
};
console.log(person?.job); // will not break the code
console.log(person.job);
let error = {};
error?.firstName?.message;

// nullish coalescence

const image = null;
const whatsappAvatar = image ?? "Avatar image";
console.log(whatsappAvatar);

const val1 = null;
let val2;
let val3 = "";
let val4 = 43;

console.log( val1 ?? 'a');
console.log(val4 ?? 'c');
console.log(val2 ?? 'd');
console.log(val3 ?? 'x' );

