console.log("hello interactive js")
const isRainy = true;
const isWindy = false;
const isSunny = true;

if (isRainy) {
  console.log("Remember to bring an umbrella.")
} else if (isWindy) {
  console.log("Make sure to wear a jacket.")
} else if (isSunny) {
  console.log("Wear Sunglasses and sunscreen.")
} else {
  console.log("Enjoy your day!")
}

// Learning about the DOM
// Document Object Model
console.log(document);
console.log(document.URL);
console.log(document.domain);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.images);

// Selecting elemnts/ Accessing the DOM

/**
 * getElementById()
 * document.getElementById("id")
 */

const header = document.getElementById("my-header-title");
console.log('header ==>', header)
console.log("header content using innerText ==>", header.innerText);
console.log("header content using innerHtml ==>", header.innerHTML);
console.log("header content using textContent ==>", header.textContent);

header.style.color = "white";
header.style.backgroundColor = "red";
header.style.padding = "10px";
header.style.textAlign = "center";
header.style.fontSize = "2rem";

/**
 * getElementsByClassName()
 * document.getElementsByClassName("class")
 */
const paragraph = document.getElementsByClassName("my-paragraph");
console.log("paragraph", paragraph);
console.log("paragraph", paragraph[0]);
paragraph[0].style.backgroundColor = "blue";
paragraph[0].style.color = "white";
paragraph[0].style.padding = "10px";
paragraph[0].style.textAlign = "center";
paragraph[0].style.marginBottom = "20px";


//Classwork
const headerTitle = document.getElementById("my-title");
console.log('headerTitle', headerTitle)
console.log('header content using innerText ==>', headerTitle.innerText)
console.log("header content using innerHtml ==>", headerTitle.innerHTML);
console.log("header content using textContent ==>", headerTitle.textContent);


headerTitle.style.color = "white";
headerTitle.style.backgroundColor = "dodgerblue";
headerTitle.style.fontSize = "2rem";
headerTitle.style.padding = "10px";
headerTitle.style.textAlign = "center";

const loremText = document.getElementById("my-para");

loremText.style.color = "black";
loremText.style.backgroundColor = "lightgreen";
loremText.style.fontSize = "1rem";
loremText.style.padding = "10px";
loremText.style.textAlign = "center";
loremText.style.lineHeight = "1.5";
// Classwork

const listItems = document.getElementsByClassName("lists");
console.log('listItems', listItems)
listItems[0].style.color = "white";
listItems[0].style.backgroundColor = "green";
listItems[0].style.padding = "10px";

const listItem = document.getElementsByClassName("list");
console.log('listItem', listItem)
listItem[0].style.color = "Red";
listItem[1].style.color = "orange";
listItem[2].style.color = "blue";
listItem[3].style.color = "black";
listItem[4].style.color = "purple";

for (let i = 0; i < listItem.length; i++) {
listItem[i].style.borderBottom = "3px solid white";
listItem[i].style.padding = "10px";
}

/**
 * getElementsByTagName()
 * document.getElementsByTagName("tag")
 */
let image = document.getElementsByTagName("img");
console.log('image ==>', image)
image[0].style.width = "200px";
image[0].style.height = "120px";
image[0].style.borderRadius = "50%";
image[0].style.display = "block";
image[0].style.margin = " 0 auto";
image[0].style.textAlign = "center";

/**
 * querySelector()
 * document.querySelector()
 */

const lists = document.querySelector(".ordered-lists");
console.log("lists", lists);

const list = document.querySelectorAll(".list");
console.log("list", list);

// get div element

let getDiv = document.querySelector("#container");
console.log("getDiv", getDiv);
 