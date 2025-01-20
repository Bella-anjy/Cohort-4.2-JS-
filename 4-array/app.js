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

/**
 * .reverse()
 * Reverses the elements in an array in place.
 * This method mutates the array and returns a reference to the same array
 */

let bestSnack = ["M", "a", "c", "S", "a", "l", "a", "d"];
let reversedResult = bestSnack.reverse();
console.log("reversedResult", reversedResult);

/**
 * .includes()
 * Determines whether an array includes a certain element,
 * returing true or false as appropriate.
 * @param searchElement -The element to search for.
 * @param fromIndex - The position in this array at which
 * to begin searching for searchElement.
 */

let gadget = ["Laptop", "Phone", "Tablet", "Smartwatch"];
let checkIfLaptopExist = gadget.includes("Laptop", 0);
let checkIfIpadExist = gadget.includes("Ipad", 0);
console.log("checkIfLaptopExist ==>", checkIfLaptopExist);
console.log("checkIfIpadExist ==>", checkIfIpadExist);

/**
 * .splice()
 * Removes elements from an array and,
 * if necessary, insertsnew elements in their place,
 * returning the deleted elemnts.
 * @param start - The zero-based location in
 * the array from which to start removing elements.
 * @param deleteCount - Th2 number of elemnts to remove
 * @returns - An array containing the elements that were deleted.
 */

let removeSomeGadget = gadget.splice(0, 3);
console.log("removeSomeGadget", removeSomeGadget);

/**
 * .sort()
 * Sorts an array in place. This method mutates the array and
 * returns a reference to the same array.
 * @param compareFn - Fubction used to determine the order of the elements.
 * it is expected to return a negative value if first argument is less than the second,
 * zero if they are equal and a positive value otherwise.
 * if omitted, the elements are sorted in ascending, ASCII character order.
 */

let favEvenNums = [4, 8, 10, 12, 2]; // in ascending order
let favOddNums = [9, 3, 1, 5, 7, 11]; // in descending order
let sortedEvenNums = favEvenNums.sort((a, b) => a - b);
let sortedEvenNums2 = favOddNums.sort((a, b) => b - a);
console.log("sortedEvenNums", sortedEvenNums);
console.log("sortedEvenNums2", sortedEvenNums2);

/**
 * Use array methos to manipulate a defind arrays
 */

//Reverse
let myBrand = ["B", "E", "L", "U", "X", "I"];
let reversedresult = myBrand.reverse();
console.log("reversedResult", reversedResult);

// includes
let myFavoriteBrand = ["Beluxi", "Gucci", "Fendi", "Fermes"];
let checkIfFermesExist = myFavoriteBrand.includes("Fermes", 0);
let checkIfLouisVuittonExist = myFavoriteBrand.includes("Loius Vuitton", 0);
console.log("checkIfFermesExist ==>", checkIfFermesExist);
console.log("checkIfLouisVuittonExist ==>", checkIfLouisVuittonExist);

// splice
let removeSomeBrand = myFavoriteBrand.splice(0, 4);
console.log("removeSomeBrand", removeSomeBrand);

// sort
let myBdayYear = [2, 0, 0, 8];
let sortedMyBdayYear = myBdayYear.sort((a, b) => a - b);
console.log("sortedMyBdayYear ", sortedMyBdayYear);

/**
 * Nested Array
 * an array that contains another array
 * is known as a nested array.
 */
/**
 * Items/Elements can be accessed in a nested array using bracket notation
 * specifying the index value. For example to access the various items
 * in the nested array "favoriteDoubleNumber", we can achieve that as follows
 */
const favoriteDoubleNumber = [
  [1, 0],
  [1, 2],
  [2, 3],
  [3, 4],
];
let getFirstElementOfIndexOneArray = favoriteDoubleNumber[0][0]; //
let getSecondElementOfIndexTwoArray = favoriteDoubleNumber[1][1]; //
let getFirstElementOfIndexThreeArray = favoriteDoubleNumber[2][0]; //
let getSecondElementOfIndexFourArray = favoriteDoubleNumber[3][0]; //
console.log(
  "getFirstElementOfIndexOneArray ==>",
  getFirstElementOfIndexOneArray
);
console.log(
  "getSecondElementOfIndexTwoArray ==>",
  getSecondElementOfIndexTwoArray
);
console.log(
  "getFirstElementOfIndexThreeArray ==>",
  getFirstElementOfIndexThreeArray
);
console.log(
  "getSecondElementOfIndexFourArray ==>",
  getSecondElementOfIndexFourArray
);
