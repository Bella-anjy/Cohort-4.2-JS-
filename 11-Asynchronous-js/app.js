// Working with async code
// Using setTimeout to simulate async code

//setTimeout(callbackfunction, delay in milliseconds);

// In the above code, the callback function is executed after the delay in milliseconds.
// Illustration

function greet() {
  setTimeout(() => {
    console.log("Hello World");
  }, 5000);
}
console.log(greet());

// using Promise
// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// A promise is a placeholder for a value that may not yet be available.
// A promise can be in one of the following states:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Meaning that the operation completed successfully.
// Rejected: Meaning that the operation failed.

// Illustration
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 5000);
});

promise.then((value) => {
  console.log(value);
});

// Using async and await
// Async/Await is a modern way of handling asynchronous operations in JavaScript. it is built on top of promises and makes the code look synchronous.
// Async functions are functions that return a promise.
// Await keyword is used to wait for a promise to resolve or reject.
//FETCH API
// Fetch API is a modern way to make HTTP requests in JavaScript.
// Fetch API is built into the global window object.
// Fetch API returns a promise.
// Illustration
const usersUrl = "https://fakestoreapi.com/users";

const fetchUsers = async () => {
  try {
    const response = await fetch(usersUrl);
    const data = await response.json();
    // console.log(response)
    // console.log('Data ==>', data)
    data.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.error("Error Fetching data", error.message);
  }
};
fetchUsers();

// Using Fetch API
// API (APPLICATION PROGRAMMING INTERFACE), URL(UNIVERSAL RESOURCES LOCATOR), JSON(JAVASCRIPT OPERATOR NOTATION)
// Classwork
// Fetch the data from the fakestoreapi.com/products and display the product name and price in the console.

const productsUrl = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
  try {
    const response = await fetch(productsUrl);
    const data = await response.json();
    data.forEach((product) => {
      console.log({
        productName: product.title,
        productPrice: product.price,
      });
    });
  } catch (error) {
    console.error("Error Fetching data", error.message);
  }
};
fetchProducts();
