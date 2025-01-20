/**
 * ===== ITERATOR ======
 */

const myFavoritePlaces = ["Paris", "New York", "Tokyo", "London"];
//for (let i = 0; i < myFavoritePlaces.length; i++) {
//  console.log(`${myFavoritePlaces[i]} is one or my favorite place to stay.`);
//};
myFavoritePlaces.forEach((place) =>
  console.log(`${place} is one of my favorite place to stay.`)
);

//classwork: use .forEach on defined array of choice with atleast 6 items
// e.g i would love to be an ambassador for Beluxi

const myFavoriteBrand = ["Gucci", "Fendi", "Beluxi", "Louis Vuitton", "Fermes"];
myFavoriteBrand.forEach((brand) =>
  console.log(`I would love to be an ambassador for ${brand}`)
);

/**
 * .map()
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn - A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let doubleNumber = numbers.map((number) => {
  return number * 2;
});

console.log("doubleNumber ==>", doubleNumber);

// Example 2 on map

let exclamationWords = [
  "Wow",
  "Amazing",
  "Awesome",
  "Terrific",
  "Unbelievable",
  "Dumbfounded",
];

let addExclamationSymbol = exclamationWords.map((word) =>
  console.log(`${word}`)
);


// class work create an array of atleast ten odd numbers and use .map() method on it.
// triple each time of the array.

let oddNumbers = [
  5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29
]
let tripleOddNumbers = oddNumbers.map((number) =>{
  return number * 3
})
console.log('Triple Numbers', tripleOddNumbers)

/**
 *. Filter()
 * Returns the el
 */

 let users = [
   {
     id: 1,
     name: "Liya",
     isAdmin: false,
   },
   {
     id: 2,
     name: "Adunni",
     isAdmin: true,
   },
   {
     id: 3,
     name: "Labake",
     isAdmin: true,
   },
   {
    id: 4,
    name: "Anu",
    isAdmin: false,
   },
 ];
 let filterAdmin = users.filter((users) => (
  users.isAdmin === true
 ))
 console.log('filterAdmin', filterAdmin)

 // classwork: filter male and female in the class
let studentData = [
  {id: 1, name: "David", gender: "Male" },
  {id: 2, name: "Mubarak", gender: "Male" },
  {id: 3, name: "Aliyah", gender: "Female" },
  {id: 4, name: "Nelson", gender: "Male" },
  {id: 5, name: "Fathia", gender: "Female" },
  
]
let filterMale = studentData.filter((m) => (
  m.gender === "Male"))
console.log('filterMale', filterMale);

let filterFemale = studentData.filter((f) => (f.gender === "Female"));
console.log("filterFemale", filterFemale);

