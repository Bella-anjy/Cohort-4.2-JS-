console.log("=========Object========");
// ========Object ======

/**
 * Object
 * Objects store collections of key-value pairs known asproperty composed of comma-seperated key-value pairs
 * surrounded by curly braces{}
 * objects are containers storing related data and functionality
 * "course level" has quotation marks because it contains a space character.
 */

let myProfile = {
  firstname: "John",
  lastname: "Doe",
  age: "30",
  "course level": "Beginner",
  isMarried: false,
  isAdmitted: true,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main Street",
    city: "Lagos",
    country: "Nigeria",
  }
}
/**
 * Accessing Object Properties
 * You can access object properties using the dot notation or bracket notation.
 */
// Using dot notation
// objjectName.propertyName
//illustration

const getMarriageStatus = myProfile.isMarried
console.log('getMarriageStatus:', getMarriageStatus)

const getAdmissionStatus = myProfile.isAdmitted
console.log('getAdmissionStatus:', getAdmissionStatus)

const getHobbies = myProfile.hobbies
console.log('getHobbies:', getHobbies)

const getCountry = myProfile.address.country
console.log('getCountry:', getCountry)

const getSecondHobby = myProfile.hobbies[1];
console.log('getSecondHobby:', getSecondHobby)


// Using bracket notation
// objectName ['property name']

let getAge = myProfile['age']
console.log('getAge:', getAge)

let getCourseLevel = myProfile['course level']
console.log('getCourseLevel', getCourseLevel)

// Methods in Object
let myCat={
  name: "Harley",
  age: "5",
  sound: "Meows",
  food: ["Fish", "Grains", "Egg"]
}
console.log("My cat loves eating Grains" );