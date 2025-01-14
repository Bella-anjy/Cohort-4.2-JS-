/**
 * Function is a reusable piece of code for performing specific tasks.
 * Fuctions javascript function syntax,
 * paswing data to functions,
 * the return keyword,
 * ES6 arrow functions, and
 * concise body syntax.
 */

/**
 * Ways of declaring function
 * 1. Function declaration
 * 2. Function Expression
 * 3. Arrow Function
 */

/**
 * 1.  Function declaration: This can be created by writing the function keyword followed by function name,
 * parenthesis() and curly braces{}.
 */
// function name(params) {}

/**
 * 2. Function Expression:It can be created by storing function inside a variable.
 */

// let sayHello = function () {};

/**
 * 3. Arrow Function: This can be created by replacing the function keyword in function expression with
 * an arrow
 */

// let welcomeStudent = () => {};

/**
 * A Function can be called by writing the function name follow by parenthesis
 */
// functionName();
// sayHello();
// welcomeStudent();

/**
 *  Parameters and Arguments
 *  Parameter(s) is a placeholder especting a value or values,
 *  Whereas, Argument is the real value for the Parameter on calling or
 * invoking a function
 */

// let calculatePerimeterOfRectangle = (params) => {};

// calculatePerimeterOfRectangle(argument);

/**
 * Function Body: The expression/code/logic inside of the curly braces is tbe Function body.
 */
// let loggedInUser = (email, password) => {
// function body
// };

/**
 * The "return" keyword is used to execute the body of the function
 */

let greetStudent = (firstName) => {
  return `You are welcome ${firstName}`;
};
console.log(greetStudent("LIYA"));
/**
 * Concise Body function can be achieved for omitting the return keyword and the curly braces
 */
let greetStudentAgain = (firstName) => `You are welcome ${firstName}`;

/**
 * Problems on Function
 */

/**
 * Create a js program/function called compareStrings
 * to show whether two strings are equal or not.
 */

const compareStrings = (strOne, strTwo) => {
  if (strOne.length === strTwo.length) {
    return "The strings are equal";
  } else {
    return "The strings are not  equal";
  }
};

let compareStringsResult = compareStrings("aliyah", "david");
console.log("compareStringsResult:==>", compareStringsResult);

/**
 * Write JS program to display an expression indicating ur favorite color and city.
 * `I love ${color} and would like to visit ${city}`
 */

let favoriteColorAndCity = function (color, city) {
  return `I love ${color} and would like to visit ${city}.`;
};
let colorAndCity = favoriteColorAndCity("Gold", "Newyork");
console.log("colorAndCity ==>:", colorAndCity);

/**
 * Write JS to calculate the volume of sphere
 * Hint v= 4/3 * PI * r * r * r
 */

let volumeOfSphere = (r) => {
  const PI = Math.PI;
  return (4 / 3) * PI * r * r * r;
};
let sphereResult = volumeOfSphere(4);
console.log("sphereResult", sphereResult);

/**
 * Write a JS program to calculate the area of circle
 */

let areaOfCircle = (r) => {
  const PI = Math.PI;
  return PI * r * r;
};
let areaResult = areaOfCircle(2);
console.log("areaResult", areaResult);

/**
 * Write a JS program aa string
 */
console.log("i would love to visit newyork".toUpperCase());

const capitalizeString = (string) => {
  return `${string.toUpperCase()}`;
};
let stringInUppercase1 = capitalizeString("liya");
let stringInUppercase2 = capitalizeString("fathia");
let stringInUppercase3 = capitalizeString("david");
let stringInUppercase4 = capitalizeString("mubarak");
console.log("stringInUpperCase:==>", stringInUppercase1);
console.log("stringInUpperCase:==>", stringInUppercase2);
console.log("stringInUpperCase:==>", stringInUppercase3);
console.log("stringInUpperCase:==>", stringInUppercase4);

/**
 * Write a JS program to welcome a loggedIn users on
 * a website platform. The function should take two parameters: email and password
 * and  return the expression `${email} is successfully logged in on the dashboard`
 */

let loggedInUser = (email, password) => {
  let passCode = "123abc";
  let emailAddress = "liya@me.io";
  if (password === passCode && email === emailAddress) {
    return `${email} is successfully logged in on the dashboard`;
  } else {
    return `Either email or password is incorrect`;
  }
};
let userOne = loggedInUser("liya@me.io", "123abc");
console.log("userOne", userOne);

/**
 * Write a JS Program to abbreviate your middleName
 * and display the expression 'Welcome Aliyah A. Olubiyo'
 */

let abbreviateMiddleName = (firstName, middleName, lastName) => {
  return `${firstName} ${middleName[0]} ${lastName}`;
};
let abbreviate = abbreviateMiddleName("Aliyah", "Anjola", "Olubiyo");
console.log("abbreviate:==>", abbreviate);

/**
 * Write JS function to classify as pre-teen, teenager or adult.
 * based on their age
 * >  13 teenagers
 * >= 18 Adults
 * <= 13 Pre-teens
 */
const classifyAge = (age) => {
  if (age <= 12) {
    return "You are pre-teen";
  } else if (age > 17) {
    return "You are an adult";
  } else{
    return "You are a teenager";
  }
};
console.log("classifyAge", classifyAge(10));
console.log("classifyAge", classifyAge(18));
console.log("classifyAge", classifyAge(90));
console.log("classifyAge", classifyAge(13));
console.log("classifyAge", classifyAge(99));





