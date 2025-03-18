// object- (key: value, key2: value2)
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  isMarried: true,
  friends: ["Jane", "peter", "mark"],
  job: "Teacher",
  location: {
    street: "Vineyard",
    area: "Lekki",
    city: "lagos",
    zip: 100111,
    Geolocation: {
      lat: 23.46,
      lang: 45.78,
    },
  },
};

// getting properties from an object
// dot notation (objName.propertyName) and bracket notation objName['propertyName']
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName.toUpperCase());
console.log(person["age"]);
console.log(person["friends"]);

console.log(
  `I live at ${person.location.street} estate, ${person.location.area} ${person.location.city}`
);

// adding a new property to an object
// workplace
person.workplace = "appolo school";
console.log(person);

//  add a new property to the location object in the person object called landmark set to
// city mall
person.location.landmark = "city mall";

// removing property- delete

delete person.job;

const user = {
  username: "ade001",
  email: "ade@google.com",
  profilepic: "image",
  age: 25,
  isLoggedIn: true,
  isVerified: true,
  posts: ["Nigeria get as e be", "I love food"],
  welcomeUser: function () {
    return this.isLoggedIn ? `welcome ${this.username}` : " login to continue";
  },
  verifyUser: function () {
    return this.isVerified ? "verification successful" : "Verify your account";
  },
};

//  object methods - developers writes the functions
//  function decaration ( this - refers to the object itself)
// write a function that tels users welcome or log in to continue
//  declare an object called book

console.log(user.welcomeUser());

console.log(user.verifyUser());

const book = {
  title: " Reminder of Him",
  author: " Colleen Hoover",
  yearPublished: 2022,
  rating: 4.4,
  similarAuthors: ["bake lively", "justin Baldoni", "Brandon sklenar"],
  prices: 7500,
  genre: "Tragedy",

  description: function () {
    return ` The book ${this.title} cost $${this.prices} and it is a ${this.genre} novel `;
  },

  recommend: function () {
    return this.rating > 3.5
      ? "This book is recommended"
      : "it is not recommended";
  },
};
console.log(book.description());
console.log(book.recommend());

// object.keys, obvject.value, object.entries

const transaction = {
  amount: 4000,
  date: "16/03/25",
  charges: 25,
  refNum: " trax-26377657983",
};

console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

// object destructuring
// rest and spread operator

const match = {
  teamA: "Wolfsburg",
  teamB: "Lecce",
  teamAscore: 3,
  teamBscore: 2,
  duration: 96,
  corners: 12,
  substitue: 7,
  fouls: 14,
  stadium: "wembley",
  weather: "snowy",

  winner: function () {
    if (this.teamA > this.teamB) {
      return `${this.teamA} won with the score of ${this.teamAscore}`;
    } else if (this.teamB > this.teamA) {
      return `${this.teamB} won with the score of ${this.teamBscore}`;
    } else {
      return "It is a Draw";
    }
  },
  overview: function () {
    return `The match between ${this.teamA} and ${this.teamB} was played at ${this.stadium}`;
  },
};

console.log(match.winner());
console.log(match.overview());

const { teamA, fouls, stadium, corners } = match;
console.log(fouls, stadium, corners);

const property = {
  name: "exquisite villa",
  rent: "2.3M/year",
  bedroom: 7,
  bathroom: 10,
  cautionFee: 5000,
  legalfee: 4000,
  facilities: ["pool", "theatre", "gym"],
  location: {
    street: "Charly Boy",
    area: "Gbagada",
    city: "lagos",
    num: 45,
    geo:{
        lat: 100.27,
        lng:45.78
    }
  },
};


const {
  name,
  rent,
  location: {
    street,
    city,
    geo: { lng },
  },
} = property;

const product ={
    price:9.99,
    discount : 7.17,
};

const{ price,discount} = product;

let newPrice = price- (discount/100) * price;

console.log(newPrice.toFixed(2));




