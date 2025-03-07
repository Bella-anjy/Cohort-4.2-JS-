import { capitalizeString, addExclamation, addQuestionMark as question } from "./index.js"; 

// capitalizeString is a named export from index.js
const capitalizeStringResult = capitalizeString("hello");
console.log(capitalizeStringResult); // HELLO

// addExclamation is a named export from index.js
const addExclamationResultOne = addExclamation("Amazing");
const addExclamationResultTwo = addExclamation("Awesome");
const addExclamationResultThree = addExclamation("Terrific");


// output:   Amazing! Amazing! Amazing!
console.log(addExclamationResultOne, addExclamationResultTwo, addExclamationResultThree);

// addQuestionMark is a named export from index.js
const addQuestionMarkResultOne = question("How are you");
const addQuestionMarkResultTwo = question("What is your name");
const addQuestionMarkResultThree = question("Where are you from");
console.log(addQuestionMarkResultOne, addQuestionMarkResultTwo, addQuestionMarkResultThree);

