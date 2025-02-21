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
  },
};
/**
 * Accessing Object Properties
 * You can access object properties using the dot notation or bracket notation.
 */
// Using dot notation
// objjectName.propertyName
//illustration

const getMarriageStatus = myProfile.isMarried;
console.log("getMarriageStatus:", getMarriageStatus);

const getAdmissionStatus = myProfile.isAdmitted;
console.log("getAdmissionStatus:", getAdmissionStatus);

const getHobbies = myProfile.hobbies;
console.log("getHobbies:", getHobbies);

const getCountry = myProfile.address.country;
console.log("getCountry:", getCountry);

const getSecondHobby = myProfile.hobbies[1];
console.log("getSecondHobby:", getSecondHobby);

// Using bracket notation
// objectName ['property name']

let getAge = myProfile["age"];
console.log("getAge:", getAge);

let getCourseLevel = myProfile["course level"];
console.log("getCourseLevel", getCourseLevel);

// Methods in Object
let myCat = {
  name: "Harley",
  age: "5",
  sound: "Meows",
  food: ["Fish", "Grains", "Egg"],
};
console.log("My cat loves eating Grains");

const favoriteAnimal = {
  name: "Nunu",
  animalName: "Camel",
  age: 15,
  habitats: ["deserts", "grasslands", "woodland"],
  camelSound: function () {
    return `${this.name} is grunting`;
  },
};
let animalPetName = favoriteAnimal.name;
console.log("animalPetName:", animalPetName);

let myAnimalSound = favoriteAnimal.camelSound();
console.log("myAnimalSound:", myAnimalSound);

let getSecondHabitat = favoriteAnimal.habitats[1];
console.log("getSecondHabitat:", getSecondHabitat);

// Create an object of your favorite car with following properties
// 1. car manufacturer
// 2. car brand
// 3. chasis number
// 4. engine number
// 5. car sounc
// 6. vehicleType
// 7. car model

let favoriteCar = {
  carManufacturer: "Mercedes",
  carBrand: "Benz",
  chasisNumber: "SV30-0169266",
  engineNumber: "PJ12345U123456P",
  vehicleType: "SUV",
  carSound: function () {
    return `${this.carBrand} is humming`;
  },
  carModel: "Cayenne",
};
let getCarBrand = favoriteCar.carBrand;
console.log("getCarBrand:", getCarBrand);

/**
 * Destructuring in object
 * let {property 1, property 2, property3 ........} = objectName
 */
const { carManufacturer, carBrand, chasisNumber, engineNumber } = favoriteCar;
console.log("carManufacturer:", carManufacturer);
console.log("carBrand:", carBrand);
console.log("chasisNumber:", chasisNumber);
console.log("engineNumber:", engineNumber);

/**
 * Updating Property of Object
 * objectName.propertyKEY = new value
 */
favoriteCar.carManufacturer = "Honda";
console.log("favoriteCar", favoriteCar);

favoriteCar.carBrand = "Porsche";
console.log("favoriteCar", favoriteCar);

favoriteCar.carModel = "BMW";
console.log("favoriteCar", favoriteCar);

favoriteCar.chasisNumber = "SVG1222789";
console.log("favoriteCar", favoriteCar);

/**
 * Nested Objects
 */
console.log("===== NESTED OBJECT =====");
const library = {
  libraryStaff: {
    librarian: {
      name: "David Shayo",
      age: 52,
      degree: "Master’s in Library and Information Science",
      duty: () => {
        return "Manages the library’s collection, research services, and programs.";
      },
    },
    "Library Assistant": {
      name: "Nelson Shofoluwe",
      age: 32,
      degree: "Bachelor of Science in English",
      duty: () => {
        return "Assists visitors with basic questions.";
      },
    },
    "Library Technician": {
      name: "Mubarak Olumide",
      age: 30,
      degree: "Bachelor of Science in English",
      duty: () => {
        return "Maintains catalogs and assists in organizing library materials";
      },
    },
    Cataloger: {
      name: "Aliyah Bellany",
      age: 30,
      degree: "Bachelor of Science in English",
      duty: () => {
        return;
        ("Maintains catalogs and assists in organizing library materials");
      },
    },
    "Digital Services Librarian": {
      name: "Fathia Temitope",
      age: 30,
      degree: "Bachelor of Science in English",
      duty: () => {
        return "Manages online databases, e-books, and digital archives.";
      },
    },
  },
};

let getLibrarianName = library.libraryStaff.librarian.name;
console.log("getLibrarianName", getLibrarianName);

let getLibrarianDuty = library.libraryStaff.librarian.duty();
console.log("getLibrarianDuty ", getLibrarianDuty);

/**
 * Iterating through objects using the For...in syntax.
 */
console.log("=== LIBRARY OWNER")
for (const libraryKey in library.libraryOwner) {
  console.log("libraryKey :", libraryKey);
}
console.log("=== LIBRARY STAFF");
for (const staff in library.libraryStaff) {
  console.log("staffKey :", library.libraryStaff[staff].name);
}

// Classwork
console.log("===== NESTED OBJECT =====");
const mySchool = {
  schoolStaff: {
    principal: {
      name: "Alimi Kehinde",
      qualification: "Bsc., English",
      duty: () => {
        return "Supervises school activities";
      },
    },
    "Vice principal": {
      name: "Nelson Shofoluwe",
      qualification: "Bsc., English",
      duty: () => {
        return "Assists the prncipal in supervising school operations";
      },
    },
    teachers:{
    "Physics teacher": {
      name: "Mubarak Olumide",
      qualification: "Bachelor of Science in English",
      duty: () => {
        return "Teaches the students Physics";
      },
    },
    "Chemistry Teacher": {
      name: "Aliyah Bellany",
     qualification: "Bachelor of Science in English",
      duty: () => {
        return;
        ("Teaches the student Chemistry");
      },
    },
    "Mathematics Teacher": {
      name: "Fathia Temitope",
      qualification: "Bachelor of Science in English",
      duty: () => {
        return "Teaches the Student Mathematics";
      },
    },
  },
},
};
for (const staff in mySchool.schoolStaff.teachers) {
  console.log("staffname :", mySchool.schoolStaff.teachers[staff].name);
}
for (const teacher in mySchool.schoolStaff) {
  console.log("staffqualification :", mySchool.schoolStaff.teachers[teacher].qualification);
}
for (const teacher in mySchool.schoolStaff) {
  console.log("staffduty :", mySchool.schoolStaff.teachers[teacher].duty());
}

// classwork
const myTask ={
  Monday: "write some code",
  Tuesday: "Go shopping",
  Wednesday: "Go grab my new ride from innoson motors"
}
const myDailyTask = Object.keys(myTask)
console.log('myDailyTask ==>', myDailyTask)

/**
 * BuiltIn Methods in Object
 */

console.log("==== Object.keys() ====");

/**
 * Object.keys()
 * Returns the names of the enumerable string properties and
 * methods of an object.
 * @param o — Object that contains the properties and methods.
 * This can be an object that you created or an existing
 * Document Object Model (DOM) object.
 */

const myTasks = {
  Monday: "write some code",
  Tuesday: "play football",
  Wednesday: "visit a friend",
};
const myDailyTasks = Object.keys(myTasks);
console.log("myDailyTasks =", myDailyTasks); //[ 'Monday', 'Tuesday', 'Wednesday' ]

console.log("=== Object.entries() ===");
/**
 * Object.entries()
 * Object that contains the properties and methods.
 * This can be an object that you created or an existing
 * Document Object Model (DOM) object.
 * Returns an array of key/values of the enumerable properties
 * of an object
 */
const myTaskEntries = Object.entries(myTask);
console.log("myTaskEntries =", myTaskEntries);
//  [[ 'monday', 'write some code' ],[ 'tuesday', 'play football' ], [ 'wednesday', 'visit a friend' ]]

console.log("=== Object.assign({target}, source) ===");
/**
 * Object.assign({target}, source)
 * Copy the values of all of the enumerable own properties
 * from one or more source objects to a target object.
 * Returns the target object.
 * @param target — The target object to copy to.
 * @param source — The source object from which to copy properties.
 */

const newTask = Object.assign(
  {
    Thursday: "prepare some note",
    Friday: "take some rest",
    Saturday: "Enjoy EPL",
    Sunday: "Sleeping and coding",
  },
  myTask
);

console.log(newTask);
// {
//   Thursday: 'prepare some note',
//   Friday: 'take some rest',
//   Saturday: 'Enjoy EPL',
//   Sunday: 'Sleeping and coding',
//   Monday: 'write some code',
//   Tuesday: 'play football',
//   Wednesday: 'visit a friend'
// }
console.log("==== DELETE KEYWORD ====");
/**
 * delete keyword
 */
const userInfo = {
  firstname: "john",
  lastname: "doe",
  email: "doe@mail.com",
  password: "129addafsf",
  isAdmin: false,
};
delete userInfo.password;
console.log("userInfo", userInfo); // password property deleted

console.log("==== DESTRUCTURING ======");
/**
 * Destructuring an object
 * (es6) Esmascript 2015
 */

const studentNames = {
  first: "Thomas",
  second: "Chidi",
  third: "Joshua",
  fourth: "Labeebah",
  fifth: "Muizat",
  sixth: "Mujibah",
};
// using the two available ways of accessing properties of an object
// console.log(studentNames.second); // dot notation
// console.log(studentNames["fourth"]); // bracket notation

// using destructuring

// const { keys } = objectName;
// const { key1, key2, key3, ... } = objectName;

const { first, second, third, fourth, fifth, sixth } = studentNames;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
console.log(sixth);