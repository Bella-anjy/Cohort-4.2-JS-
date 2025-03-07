const divideNumbers = (a, b) => {
  try {
    if (b === 0 ||typeof b !== 'number') {
      throw new Error('Division by zero is not allowed and character must be a number');
    }
    return a/b
  } catch (error) {
    console.error(error.message);
  }
}

const resultOne = divideNumbers(1, 2);
console.log("resultOne", resultOne);

const resultTwo = divideNumbers(5, 0);
console.log("resultTwo", resultTwo);

const resultThree = divideNumbers(3, "5");
console.log("resultThree", resultThree);

// Classwork
// Create a function to sayHello to employee resuming at the office space.
// The name character must be validated.

const sayHelloToEmployee = (name) => {
  try {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    return `Hello ${name}, welcome to the office space`;
  } catch (error) {
    console.error(error.message);
  }
}

console.log("firstEmployee ==>", firstEmployee = sayHelloToEmployee("Aliyah"));
console.log("secondEmployee ==>",secondEmployee = sayHelloToEmployee(5));
console.log("thirdEmployee ==>",thirdEmployee = sayHelloToEmployee("Mubarak"));


// Solution 2
const welcomeEmployee = (name) => {
  try {
    if (typeof name !== 'string' || name.trim().length === 0) {   
      throw new Error('Name character must be a string and must not be empty');
    }
    return `Hello ${name}`;
  } catch (error) {
    console.error("Error while trying to figure out employee",error.message);
  }
};

console.log(welcomeEmployee("Aliyah"));
console.log(welcomeEmployee("Mubarak"));
console.log(welcomeEmployee("David"));
console.log(welcomeEmployee(5));
console.log(welcomeEmployee(""));
console.log(welcomeEmployee(12277271222));