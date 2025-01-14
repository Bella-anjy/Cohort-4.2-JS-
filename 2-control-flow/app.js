/**
 * Learn how to use keywords such as if, else if, switch, a d ternary syntax
 * to control the flow of a program in Javascript
 * In another word, rendering some statement/ expressioj
 * based on single or muliple conditions
 */

/**
 * IF STATEMENT
 */  

let condition = true;
if (condition) {
  console.log("I am a truthy value");
}

/**
 * IF STATEMENT
 * Example 2
 */

let isUsers = true;
let isAdmin = true;
let isAuthenticated = true;

if (isUsers && isAuthenticated) {
  console.log("You can now purchase gadgets on our platform");
}

/**
 * IF STATEMENT
 * Classwork
 */

let isSunny = true;
let isCloudy = true;

if (isSunny && isCloudy) {
  console.log("Rain is likely to fall soon");
}

/**
 * If else statement
 */

if (isAdmin && isAuthenticated) {
  console.log("You can only explore our product");
} else {
  console.log("You need to be an Administrator");
}

/**
 * If else Statment
 * classwork 2
 */
let isRegistered = true;
let isVerified = true;

if (isRegistered && isVerified) {
  console.log("Please Come into the hall ");
} else {
  console.log("Please go back to main gate and register");
}
/**
 * If, else if and else statement
 */
if (isAdmin && isAuthenticated) {
  console.log("You must be an admin and authenticated");
} else if (!isAdmin && isAuthenticated) {
  console.log("You can Coordinate user on our platform");
} else {
  console.log("Contact the owner of the platform");
}

/**
 * classwork 1
 */
let teenAge = 15;
let teenagerAge = 16;
let adultAge = 22;

if ("teenAge && adultAge") {
  console.log("If below 20 but above 15 is consdered a teenager");
} else if ("teenAge && adultAge") {
  console.log("20 and above be considered an adult");
} else {
  console.log("Teens should come along with their parent");
}

/**
 * correction
 */
let age = 5;

if (age < 13) {
  console.log("You are a teenager");
} else if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a Pre-teen");
}

/**
 * Switch
 * Better maintenace of multiple condition
 */
// switch (key) {
// case value:

// break;

// default:
// break;
// }
/**
 * Get day of the week using switch statement
 */
let randomNumbers = Math.random() * 6;
let convertedRandomNumbers = Math.floor(randomNumbers);
console.log("randomNumbers ==>", randomNumbers);
console.log("convertedRandomNumbers ==>", convertedRandomNumbers);

switch (convertedRandomNumbers) {
  case 0:
    console.log("You won a plastic cup");
    break;
  case 1:
    console.log("You won a water bottle");
    break;
  case 2:
    console.log("You won a T-SHIRT");
    break;
  case 3:
    console.log("You won 10dollar");
    break;
  case 4:
    console.log("You won a Sneakers");
    break;
  case 5:
    console.log("You won a pen");
    break;
  case 6:
    console.log("You won a Laptop");

  default:
    console.log("No gift is available ");
    break;
}
/**
 * Use control flow to classify student grade based on their scores
 * Ranges of score studeng can obtain in a particular subject
 * 70 - 100 grade A
 * 60 - 69 grade B
 * 50 - 59 grade C
 * 40 - 49 grade D
 * 30- 39 grade E
 * 0 - 29 grade F
 * For each truthy value, print "You scored grade A and your score 100%"
 */

// Solution
let maximumScore = 101;
let getStudentScore = Math.random() * maximumScore;
let convertedStudentScore = Math.floor(getStudentScore);
console.log("getStudentScore ==>", getStudentScore);
console.log("convertedStudentScore ==>", convertedStudentScore);

switch (true) {
  case convertedStudentScore >= 70 && convertedStudentScore <= 101:
    console.log(`You scored ${convertedStudentScore} and your grade is A`);
    break;
  case convertedStudentScore >= 60 && convertedStudentScore <= 69:
    console.log(`You scored ${convertedStudentScore} and your grade is B`);
    break;
  case convertedStudentScore >= 50 && convertedStudentScore <= 59:
    console.log(`You scored ${convertedStudentScore} and your grade is C`);
    break;
  case (convertedStudentScore = 40 && convertedStudentScore <= 49):
    console.log(`You scored ${convertedStudentScore} and your grade is D`);
    break;
  case convertedStudentScore >= 30 && convertedStudentScore <= 39:
    console.log(`You scored ${convertedStudentScore} and your grade is E`);
    break;
  case convertedStudentScore >= 0 && convertedStudentScore <= 29:
    console.log(`You scored ${convertedStudentScore} and your grade is F`);
    break;

  default:
    console.log("Your score is not available or withheld");
    break;
}

/**
 * Calculate the final student grade based on assignmentScore, midtermTestScore, and finalExamScore
 * Use control flow to grade student based on the score the student obtained
 * Hint:To get the totalScore, you need the average score
  */