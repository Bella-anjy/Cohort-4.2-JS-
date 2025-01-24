/**
 * ===== ITERATOR ======
 */
/**
 * In computer programming, an iterator is an object
 * that progressively provides access to each item of a collection, in order.
 */

/**
 * ITERATORS
 * .forEach()
 * .map()
 * .filter()
 * .reduce()
 * .find()
 * .every()
 * .some()
 */

/**
 * forEach()
 * A function that accepts up to three arguments.
 * forEach calls the callbackfn function one time
 * for each element in the array.
 * Performs the specified action for each element in an array.
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

let oddNumbers = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
let tripleOddNumbers = oddNumbers.map((number) => {
  return number * 3;
});
console.log("Triple Numbers", tripleOddNumbers);

/**
 *. Filter()
 *  Returns the elements of an array that meet the
 * condition specified in a callback function.
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
let filterAdmin = users.filter((users) => users.isAdmin === true);
console.log("filterAdmin", filterAdmin);

// classwork: filter male and female in the class
let studentData = [
  { id: 1, name: "David", gender: "Male" },
  { id: 2, name: "Mubarak", gender: "Male" },
  { id: 3, name: "Aliyah", gender: "Female" },
  { id: 4, name: "Nelson", gender: "Male" },
  { id: 5, name: "Fathia", gender: "Female" },
];
let filterMale = studentData.filter((m) => m.gender === "Male");
console.log("filterMale", filterMale);

let filterFemale = studentData.filter((f) => f.gender === "Female");
console.log("filterFemale", filterFemale);

// classwork: filter students with age greater than 20
// filter students with age less than 20
// filter students with age equal to 20
// filter students with age greater than or equal to 20
// filter students with age less than or equal to 20
// filter students name with length greater than 5

const students = [
  { id: 1, name: "David", age: "23" },
  { id: 2, name: "Mubarak", age: "21" },
  { id: 3, name: "Aliyah", age: "20" },
  { id: 4, name: "Nelson", age: "22" },
  { id: 5, name: "Fathia", age: "19" },
];
// Greater than 20
const filterAgeGreaterThan20 = students.filter((student) => student.age > 20);
console.log("filterAgeGreaterThan20 ==>", filterAgeGreaterThan20);

// Less than 20
const filterAgeLessThan20 = students.filter((student) => student.age < 20);
console.log("filterAgeLessThan20 ==>", filterAgeLessThan20);

// Equal to 20
const filterAgeEqualTo20 = students.filter((student) => student.age == 20);
console.log("FilterAgeEqualTo ==>", filterAgeEqualTo20);

// Greater than or equal to 20
const filterAgeGreaterThanOrEqualTo20 = students.filter(
  (student) => student.age >= 20
);
console.log(
  "filterAgeGreaterThanOrEqualTo20 ==>",
  filterAgeGreaterThanOrEqualTo20
);

// Less than or equal to 20
const filterAgeLessThanOrEqualTo20 = students.filter(
  (student) => student.age >= 20
);
console.log("filterAgeLessThanOrEqualTo20 ==>", filterAgeLessThanOrEqualTo20);

// Names with length greater than 5
const nameLengthGreaterThan5 = students.filter((student) => student.name.length > 5)
console.log('nameLengthGreaterThan5', nameLengthGreaterThan5)

// patient record
const record = [
  { id: 1, 
    fullname: "Owolabi Kehinde",
    department : "Phlebotomy",
    age: 35,
    addres: "10, Adeyete str",
  },
  { 
    id: 2,
     fullname: "Taiye Taiwo",
     department : "Chemistry",
     age: 25, 
     addres: "10, Adeyemi str",
  },
  { id: 3,
     fullname: "Nuno Gomez",
     department : "Anatomy",
     age: 55,
      addres: "10, Adeyete str",
  },
  { id: 4,
   fullname: "Nnamdi Kelvin", 
   department : "Physiology",
   age: 55, 
   addres: "10, Adeyete str",
  },
  { id: 5,
     fullname: "James Obi",
     department : "Phlebotomy",
     age: 35, 
     addres: "10, Adeyete str",
    },

];
// TODO
const filterDepartment = record.filter
((record) => record.department === "Phlebotomy" && record.age > 20);
console.log(filterDepartment);

/**
 * .reduce()
 * calls the specified callback function for all elements in an array.
 * The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function
 */


const numberArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 56]
let getNumberArrays = numberArrays.reduce((accumulator, currentValue) => 
{
  return accumulator + currentValue
}, 0)
console.log('getNumberArrays', getNumberArrays)
// class work
let myName = ["l", "i", "y", "a"]
let getName = myName.reduce((accumulator, currentValue) => 
{
  return accumulator + currentValue
}, "A.")
console.log('getName', getName)

//.find()
let cars =[
  {
    id: 1,
    name: "Mercedes",
  },
  {
    id: 2,
    name: "Volkswagen",
  },
  {
    id: 3,
    name : "BMW",
  },
  {
    id: 4,
    name: "Range",

  }
]
let findCarLength = cars.find((car) => car.name.length > 4);
console.log("findCarLength", findCarLength);

/* .every()
 * The every() method tests whether all elements in the array pass
 *It returns a Boolean value.
 * Determines whether all the members of an array satisfy the specified test.
 */
const randomNum = [10, 20, 30, 40, 50, 60, 70];

const checkValue = randomNum.every((num) => num > 3); // True
console.log("checkValue", checkValue); // True

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
const checkEvenNumberValue = evenNumbers.every((even) => even < 0);
console.log("checkEvenNumberValue", checkEvenNumberValue); // false

console.log("====== .SOME() ======");
/**
 * .some()
 * The some() method tests whether at least one element in the array passes
 * the test implemented by the provided function. It returns true if, in the array,
 * it finds an element for which the provided function returns true;
 * otherwise it returns false. It doesn't modify the array.
 */

const myFavSportName = [
  "Tennis",
  "Badminton",
  "Cricket",
  "Football",
  "Basketball",
];

const checkItemLength = myFavSportName.some((sport) => sport.length < 4);
console.log("checkItemLength", checkItemLength); // true
