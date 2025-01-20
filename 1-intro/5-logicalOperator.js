/**
 * Logical Operators
 * AND Operator (&&)
 * OR Operator (||)
 * Not Operator (!)
 */

// AND Operator &&
// When && operator is placed between two JS expressions, the result
// will return a truthy value if the both expression are true otherwise falsy value is returned

let isSunny = true;
let isCoding = true;
let isCloudy = false;

let checkIfExpressionIsTrue = isSunny && isCoding; // true
console.log("check If Expression is True =", checkIfExpressionIsTrue); // true bcos both expressions are true

//
let confirmIfExpressionIsFalse = isSunny && isCloudy; // false
console.log("confirmIfExpressionIsFalse", confirmIfExpressionIsFalse);
/**
 * Classwork
 * Create three variables, isStudent, isGraduated and isAdmmitted, and use logical
 * operator (&&) to show a truthy and a falsy value.
 */

// OR Operator ||
// When || operator is placed between two JS expressions, the result
// will return a truthy value if either of the expression is true otherwise falsy value is returned

let isRainy = false;
let isUmbrellaAvailable = true;

let verifyTheExpressionState = isRainy || isUmbrellaAvailable;
console.log("verifyTheExpressionState =", verifyTheExpressionState);

/**
 * Classwork
 * Create three variables, isUsers, isLoggedIn and isTeacher, and use logical
 * operator (||) to show a truthy and a falsy value.
 */

// Not Operator !
// The Not operator ! is used to reverse a result. That is, a positive to negative, or negative to positive.

let changedWeatherCondition = !isRainy;
console.log("changed Weather Condition =", changedWeatherCondition); // true
