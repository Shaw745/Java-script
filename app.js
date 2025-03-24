// // Document object model (dom)

// // select element on the document, tagName(h1,p), className, idName,
// // combination

// const headings = document.getElementsByTagName("h1");
// console.log(headings);

// const myH1s = document.getElementsByClassName('heading');
// console.log(myH1s);

// const textPara = document.getElementById('text');
// console.log(textPara);

// //querySelector(css selector) one
// // ., #, div p, div .inner
// const firstpara = document.querySelector("p");
// console.log(firstpara);

// // querySelectorAll
// const allParas = document.querySelectorAll('p');
// console.log(allParas);

// // interacting with the contents on the doc
// // textcontent, innertext, innerHTML

const heading = document.querySelector(".heading");
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent += "JS IS FUN";
// heading.innerText = "JS IS FUN";

const container = document.querySelector("div");
console.log(container.innerHTML);
container.innerHTML += "<a href='https://google.com'> visit google</a>";

const myName = " azeez thiago";
const initials = " A.T";
const intro = document.querySelector("h2");
intro.textContent = ` welcome ${myName}`;
// welcome initials

// interact with attributes
const mylink = document.querySelector(".mylink");

// facebook
mylink.textContent = "facebook";
mylink.setAttribute("href", "https://facebook.com");
mylink.setAttribute("target", "_blank");
mylink.getAttribute("href");
console.log(mylink.getAttribute("href"));

// interact with styles
mylink.style.color = "red";
mylink.style.textDecoration = "none";

//

const btn = document.querySelector("button");
// btn.className = "mybtn";
//  classlist
btn.classList.add("mybtn");
btn.classList.add("kelvin");
btn.classList.remove("kelvin");

// create element in js

const section = document.createElement("section");
section.innerHTML = "<h1>Created from JS</h1>";
section.className = "mysection";

// append it either to the body or wherever it is needed
const body = document.querySelector("body");
body.appendChild(section);

// responding to users interaction
// event e.g click, submit 2. event, handler , function
const testbtn = document.querySelector(".testbtn");
testbtn.addEventListener("click", () => {
  console.log("user clicked");
  body.style.backgroundColor = "red";
});

// form handling
// submit
// click
// the default behaviour of form is that it refreshes the page
const form = document.querySelector("form");
const fullname = document.querySelector(".fullname");
const small = document.querySelector("form small");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullNameValue = fullname.value.trim();
  console.log("FORM SUBMITTED", fullNameValue);
  //  validate the input
  if (fullNameValue === "") {
    small.style.display = "block";
    small.textContent = "please provide a name";
  }
});
