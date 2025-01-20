// Math.sqrt() and Math.sqrt()

// Returns the square root of a number
console.log("Sqare Root of numbers", Math.sqrt(4)); // ==> 2
console.log("Sqare Root of numbers", Math.sqrt(16)); // ==> 4

// Math.pow()
/**
 * Returns the value of a base expression taken to a specified power.
 * @param x — The base value of the expression.
 * @param y — The exponent value of the expression.
 * Math.pow(x, y)
 */
console.log("2 raise to 4==>", Math.pow(2, 4));
console.log("2 raise to 16==>", Math.pow(2, 16));
console.log("3 raise to 9==>", Math.pow(3, 9));

console.log("==== DATE METHODS ======");
/**
 * Date Methods
 * new Date()
 */
console.log("new Date ==>", new Date());
console.log("Get the local date, and time ==>", new Date().toLocaleString());

console.log("The current day of the week==>", new Date().getDay());
console.log("Get the current month==>", new Date().getMonth());
console.log("Get the current year==>", new Date().getFullYear());
console.log("Get the current date==>", new Date().getDate());
console.log("Get the hour==>", new Date().getHours().toLocaleString());
console.log("Get the minute==>", new Date().getMinutes().toLocaleString());
console.log("getSeconds()", new Date().getSeconds().toLocaleString());
console.log(
  "Get the hour with text expression==>",
  `${new Date().getHours().toLocaleString()} hrs ago`
);
console.log("Get the current time ==>", new Date().toLocaleTimeString());
console.log(
  "Returns a date as a string value in ISO format ==>",
  new Date().toISOString()
);
