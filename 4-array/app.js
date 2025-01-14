/**
 * Array
 * Array = collection of list if items
 * denoted with square bracket [].
 * each itemin anarray is seperated with comma.
 * withsame data types or different data types
 * Each time inside of an arrayisat numbered ppsistion, or index,startinh at 0.
 */

/**
 * How to  create an  array
 */
let cohort4Students = [
  "David",
  "Aliyah",
  "Nelson",
  "Mubarak",
  "Abdulqudus",
  "Mustapha",
];

console.log(cohort4Students);

/**
 * Accessing item in an array
 * array[indexNumber]
 */

console.log(cohort4Students[0]); // David
console.log(cohort4Students[1]); //Aliyah
console.log(cohort4Students[2]); //Nelson
console.log(cohort4Students[3]); //Fathia

/**
 * Create an array of your favorite place and access the array
 */
let favoritePlaces = ["Dubai", "America", "Tanzania", "Ghana"];
console.log(favoritePlaces);

console.log(favoritePlaces[0]); // Dubai
console.log(favoritePlaces[1]); // America
console.log(favoritePlaces[2]); // Tanzania
console.log(favoritePlaces[3]); // Ghana

/**
 * How to modify/update an item inside an array
 * myArray[index to modify] = new value
 */

cohort4Students[0] = "Iyke";
console.log("nameChange", cohort4Students);

favoritePlaces[3] = "California";
console.log("favoritePlaceChange", favoritePlaces);

// ===== Array Methods ==========

/**
 * .length
 * Gets or sets the length of the array.
 * This is a number one higher than the highest index in an array.
 */

let topFourTeamEPL = ["Liverpool", "Nottingham Forest", "Arsenal", "Chelsea"];
let getTeams = topFourTeamEPL.length;
console.log("getTeams ==>", getTeams); //4

let myFavoritePlaces = ["Dubai", "America", "Tanzania", "Ghana"];
let getMyFavoritePlaces = myFavoritePlaces.length;
console.log("getMyFavoritePlaces ==>", getMyFavoritePlaces);

/**
 * .push() add new item into an array
 * Appends new elements to the end of an array,
 * and returns the new length of an array.
 * @param items - New elements to add to the array.
 */

let addNewTeam = topFourTeamEPL.push("Manchester City");
console.log("topFourTeamEPL", topFourTeamEPL);

let addNewPlace = myFavoritePlaces.push("Canada");
console.log("myFavoritePlaces", myFavoritePlaces);

/**
 * .pop() remove an item in an array
 * Removes the last element from an array
 * and returns it.
 */

let removeLastTeam = topFourTeamEPL.pop();
console.log("topFourTeamEPL", topFourTeamEPL);

/**
 * .shift()
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and array is not modified.
 */
let removeFirstTeam = topFourTeamEPL.shift();
console.log("removeFirstTeam ==>", removeFirstTeam);

//Classwork
// 1. Create an array with your favorite local stadia in Nigeria
// and use all the above methods to perform operation on the array
// 2. Create an array with your favorite local food in  nigeria

let localStadia = [
  "Teslim Balogun Stadium",
  "Confluence Stadium",
  "Warri Stadium",
  "Yakubu Gowon Stadium",
];
console.log(localStadia);

//Accessing
console.log(localStadia[0]); // Teslim Balogun Stadium
console.log(localStadia[1]); // Confluence Stadium
console.log(localStadia[2]); // Warri Stadium
console.log(localStadia[3]); // Yakubu Gowon Stadium

//Modifying
localStadia[2] = "Lagos National Stadium";
console.log("stadiaChange", localStadia);

//.length
let getStadia = localStadia.length;
console.log("getStadia ==>", getStadia);

// .push
let addNewStadia = localStadia.push("Nnamdi Azikiwe Stadium");
console.log("localStadia", localStadia);

//.pop
let removeLastStadia = localStadia.pop();
console.log("localStadia", localStadia);

//.shift
let removeFirstStadia = localStadia.shift();
console.log("removeFirstStadia ==>", removeFirstStadia);

let favoriteFood = [
  "Mac Salad",
  "Crinkle Potatoes",
  "Italian Pizza",
  "Pounded Yam and Egusi",
];
console.log(favoriteFood);

//Accessing
console.log(favoriteFood[0]); // Mac Salad
console.log(favoriteFood[1]); // Crinkle Potatoes
console.log(favoriteFood[2]); // Italian Pizza
console.log(favoriteFood[3]); // Pounded Yam and Egusi

// Modifying
favoriteFood[3] = "Spicy Spaghetti";
console.log("foodChange", favoriteFood);

//.length
let getFood = favoriteFood.length;
console.log("getFood ==>", getFood);

//.push
let addNewFood = favoriteFood.push("Basmati Rice");
console.log("favoriteFood", favoriteFood);

//.pop
let removeLastFood = favoriteFood.pop();
console.log("favoriteFood", favoriteFood);

//.shift()
let removeFirstFood = favoriteFood.shift();
console.log("removeFirstFood ==>", removeFirstFood);

/**
 * .unshift()
 * Inserts new elements at the starr of an array,
 * and returns the new element of an array.
 * @param items - Elements to insert at the start of the array.
 */
let addFirstTeam = topFourTeamEPL.unshift("Liverpool");
console.log("addFirstTeam", addFirstTeam);
console.log("topFourTeamEPL", topFourTeamEPL);

/**
 * .slice()
 * Returns a copy of a section of an array
 * For both start and end, a negative index can be used to indicate
 * an offset from the end of an array
 * For example, -2 refersto the second to last
 * element of the array.
 * slice (@param start, @param end)
 */
let favoritePlace = ["Lagos", "Iju", "Osun", "Mosaku", "Abuja", "Abeokuta"];
let favoritePlaceCopy = favoritePlace.slice(2, 4);
console.log("favoritePlaceCopy", favoritePlaceCopy);

let BestPlaces = ["Dubai", "America", "Tanzania", "Ghana"];
let BestPlacesCopy = BestPlaces.slice(1, 3);
console.log("BestPlacesCopy", BestPlacesCopy);

/**
 * .split()
 * Split a string into substrings using
 * the specified seperator and return them as an array.
 * @param seperator - A string thatbidentifies character or
 * characters to use in seperating the string.
 * if Omitted, a single-element array containig the entire string is returned.
 * @param limit - A value used to limit the number of elements
 * returned in the array
 */
let splitString = "Hello World".split("");
console.log("splitString", splitString);

/**
 * .join()
 * Adds all the elembts of an array into a string,
 * seperated by the specified seperator string.
 * @param seperator - A string used to seperate one element
 * of the array from the next in the resulting string.
 * if omitted, the array elements are seperated with a comma.
 */

let joinString1 = splitString.join("");
let joinString2 = splitString.join();
console.log("joinString1", joinString1);
console.log("joinString2", joinString2);
