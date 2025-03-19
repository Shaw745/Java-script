const customers = ["ade", "doe"];
customers.map((cust) => {
  console.log(cust.charAt(0));
});

//[object1,object2]
// name,age, gender,location,phonenumber
const myCustomers = [
  { name: "joe", age: 62, gender: "m", location: "ikate", purchase: 6000 },
  { name: "dan", age: 76, gender: "m", location: "lagos", purchase: 2300 },
  { name: "best", age: 87, gender: "f", location: "ikoyi", purchase: 8700 },
  { name: "shaw", age: 90, gender: "m", location: "lagos", purchase: 6960 },
  { name: "jason", age: 37, gender: "m", location: "ketu", purchase: 9212 },
];

//
myCustomers[1].name;
const { name } = myCustomers[1];
myCustomers[1]["name"];

myCustomers.map((custmer) => {
  console.log(custmer.name);
});

// get customers that are 25 and above
const olderCustomers = myCustomers.filter((customer) => customer.age >= 70);
console.log(olderCustomers);

const youngerCustomers = myCustomers.filter((customer) => customer.age < 70);
console.log(youngerCustomers);

const gendercustomers = myCustomers.filter(
  (customer) => customer.gender.toLocaleLowerCase() === "M".toLocaleLowerCase()
);
console.log(gendercustomers);

// get the number of people or customers staying in the lagos

const lagosPeople = myCustomers.filter((lp) => lp.location === "lagos");
console.log(lagosPeople.length);

// arrange the customers according to the age( young to old)

const ccustomers = myCustomers.sort((a, b) => a.age - b.age);
console.log(ccustomers);

// get the average age of the customers
let totalAge = myCustomers.reduce((Acc, cur) => Acc + cur.age, 0);
let averageAge = totalAge / myCustomers.length;
console.log(averageAge);

const lagoscustomer = myCustomers.find((cps) => cps.location === "lagos");
console.log(lagoscustomer);

// get a new array containing all the purchases of all customers
const newarray = myCustomers.map((cust) => cust.purchase);
console.log(newarray);

//get al customers with a mininimum of 6000 purchase

const spendingPurchase = myCustomers.filter((cust) => cust.purchase >= 6000);
console.log(spendingPurchase);

// get the total purchase amount of all customers

const totalPurchase = myCustomers.reduce((cust, acc) => cust + acc.purchase, 0);
console.log(totalPurchase);

// get the average purchase for the last three customers

const last3Customers = myCustomers
  .slice(2)
  .reduce((acc, cur) => cur.purchase, 0);
const avg = last3Customers / 3;
console.log(last3Customers);

// get the total purchase amount for all  customers in lagos

const lagostotalpurchase = myCustomers
  .filter((cust) => cust.location === "lagos")
  .reduce((acc, cur) => acc + cur.purchase, 0);
console.log(lagostotalpurchase);

const shoppingCart = [
  { title: "jean", price: 100, qty: 2 },
  { title: "Hat", price: 50, qty: 4 },
  { title: "cream", price: 300, qty: 1},
  { title: "Duffel bag", price: 150, qty: 5 },
  { title: "Balaclava", price: 70, qty: 3 },
];

// Jean cost $100
shoppingCart.map((item)=>{
    console.log(`${item.title} costs $${item.price}`);
});

const shoppin = shoppingCart.filter((more) => more.price >70);
console.log(shoppin);

shoppingCart.map((item) => {
  console.log(`${item.title} will costs $${item.price * item.qty}`);
});
 

const totalcost = shoppingCart.reduce((acc,item) => acc + item.price *item.qty, 0);
console.log(totalcost);