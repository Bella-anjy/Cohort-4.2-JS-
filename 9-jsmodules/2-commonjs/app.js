//Importing the module
const {
  favoriteFood,
  favoritePlace,
  favoriteColor,
  usersProfile,
  sayHello,
  add,
  subtract,
  multiply,
  divide,
  myBioData,
} = require("./index.js");

// Favorite food
console.log("favoriteFood =>", favoriteFood);
console.log("secondFavoriteFood =>", favoriteFood[1]);
console.log("thirdFavoriteFood =>", favoriteFood[2]);
console.log("fourthFavoriteFood =>", favoriteFood[3]);

// Favorite place
console.log("favoritePlace =>", favoritePlace);
console.log("secondFavoritePlace =>", favoritePlace[1]);
console.log("thirdFavoritePlace =>", favoritePlace[2]);
console.log("fourthFavoritePlace =>", favoritePlace[3]);

// Favorite color
console.log("favoriteColor =>", favoriteColor);
console.log("secondFavoriteColor =>", favoriteColor[1]);
console.log("thirdFavoriteColor =>", favoriteColor[2]);
console.log("fourthFavoriteColor =>", favoriteColor[3]);

// Users profile
console.log("usersProfile =>", usersProfile);

const userProfileName = usersProfile.map((user) => user.name);
console.log("userProfileName =>", userProfileName);

// Say Hello Function
console.log(sayHello("John Doe"));

// Arithmetic Operations
console.log(add(2, 3));
console.log(subtract(5, 3));
console.log(multiply(2, 3));
console.log(divide(6, 3));

// My Bio Data
console.log("myBioData =>", myBioData);
console.log(myBioData.name);
console.log(myBioData.age);
console.log(myBioData.location);
console.log(myBioData.hobbies[2]);