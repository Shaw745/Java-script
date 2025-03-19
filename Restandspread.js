// Rest and spread operator 
// ... they are both denoted by three dot 

const user ={
    name:"John carter",
    age:90,
    gender: "male",
};
// unstructured data type 
const { ...prop }= user;
console.log(prop);

//rest operator

const arr = [3,3,2,9];
//structured 
const[...operator]= arr;
console.log(operator);

const countries = ["Tokyo","paris","italy","spain","berlin"];
const [x,...rest] = countries;

const product ={
    title:"michael kors",
    price:300,
    image:"image",
};

const {price,...property} = product;

// spread operators it is also denotted by three dots ...
//
const detaiedProduct = {
    stock:6,
    color: "red",
    category:"bag",
    weight: 13,
    ...product
};  

console.log(detaiedProduct);

const onlineStudent = ["john",'paul',"peter"];
const physicalStudent = ["victory",'victor','virginia'];

const allStudent = [...onlineStudent,...physicalStudent,"jeff","shayla"];
console.log(allStudent );


