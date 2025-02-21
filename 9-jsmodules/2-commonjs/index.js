const favoriteFood = [
  "Amala",
  "Eba",
  "Fufu",
  "Pounded Yam",
  "Rice",
  "Beans",
  "ofe-owerri",
];

const favoritePlace = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
  "Owerri",
  "Enugu",
]

const favoriteColor =[
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Black",
  "White",
  "Purple",
]

const usersProfile = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    location: "Lagos",
    favoriteFood: "Amala",
    favoritePlace: "Lagos",   
    favoriteColor: "Red",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
    location: "Abuja",
    favoriteFood: "Eba",
    favoritePlace: "Abuja",
    favoriteColor: "Blue",
  },
  {
    id: 3,
    name: "James Doe",
    age: 35,
    location: "Port Harcourt",
    favoriteFood: "Fufu",
    favoritePlace: "Port Harcourt",
    favoriteColor: "Green",
  },
  {
    id: 4,
    name: "Jennifer Doe",
    age: 40,
    location: "Kano",
    favoriteFood: "Pounded Yam",
    favoritePlace: "Kano",
    favoriteColor: "Yellow",
  },
  {
    id: 5,
    name: "Jenny Doe",
    age: 45,
    location: "Ibadan",
    favoriteFood: "Rice",
    favoritePlace: "Ibadan",
    favoriteColor: "Black",
  },
  {
    id: 6,
    name: "Jen Doe",
    age: 50,
    location: "Owerri",
    favoriteFood: "Beans",
    favoritePlace: "Owerri",
    favoriteColor: "White",
  },  
]

const sayHello = (name) => {
  return `Hello ${name}`;
} 

// Arithmetic functions
const add = (a, b) => {
  return a + b;
}
const subtract = (a, b) => {
  return a - b;
}
const multiply = (a, b) => {
  return a * b;
}
const divide = (a, b) => {
  return a / b;
}

module.exports = {
  favoriteFood,
  favoritePlace,
  favoriteColor,
  usersProfile,
  sayHello,
  add,
  subtract,
  multiply,
  divide,
};