// asynchronus js // non blocking code
// codes that takes time

console.log("a");
console.log("b"); // 5 secs
console.log("c");

// a c b
// fetching data
// geolocation
//payme nt gateway

//pubic and private api
// rest api = Get, post , delete, patch

const url = "http://dummyjson.com/products";

// fetch request is what we called the async and await
const getProduct = async () => {
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.products);
  // display in the browser
};
getProduct();

// promise -- containers for future value
// pending, fulfilled, rejected

// .then

const getProducts2 = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.products);
    });
};

getProducts2();
