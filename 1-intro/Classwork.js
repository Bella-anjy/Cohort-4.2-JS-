//classwork 1
console.log("Aliyah".length);
console.log("Liya".length);

// Uppercase
//classwork 2
console.log("aliyah".toUpperCase())

// Lowercase
console.log("All charactersto lowercase =>","I AM SUPER EXCITED TO START LEARNING JS".toLowerCase())

//classwork 3
console.log("check whether it contain a substring =>", "aliyah".includes("a"));

// /index of a string characters/
//string [index]
console.log("first character","aliyah"[0]);
console.log("second character", "aliyah"[1]);
console.log("third character", "aliyah"[2]);
console.log("fourth character", "aliyah"[3]);
console.log("fifth character", "aliyah"[4]);
console.log("sixth character", "aliyah"[5]);

// chart
// Returns the character at the specified index
// Example: "aliyah".charAt(4)

// * Slice(start, end): Extracts part of a string and returns it
// classwork 4
console.log("aliyah".slice(0, 4))

//split(seperator): Splits a string into an array of substrings
console.log("aliyah".split(""))

//  Math methods
// CLASSWORK 5
console.log("Math random result btw 0 and 1 =>", Math.random());
console.log("Math random result btw 0 and 5 =>", Math.random());
console.log("Math random result btw 0 and 2 =>", Math.random() * 5);
console.log("Math random result numbers from 1 to 10 =>", Math.random() * 10 + 1);

console.log(
  "Math random result numbers from 1 to 100 =>",
  Math.random() * 100 + 1
);
console.log("RESULT OF RANDOM =>", Math.random() *100 + 1);
// Math floor
console.log("Math.floor Result one", Math.floor(0.6749)); 
console.log("Math.floor Result two", Math.floor(3.523));
console.log("RESULT OF RANDOM==>", Math.random() * 3 + 1);
console.log("CONVERTED==>", Math.floor(Math.random() * 3 + 1));
// Math PI
console.log("Math PI=>", Math.PI)

// Math Ceil
console.log(Math.ceil(3.798))
console.log(Math.ceil(8.798));


//Math Round
console.log(Math.round(3.576))
console.log(Math.round(5.789))
console.log(Math.round(5.089));


//Math square root
console.log("Square Root of numbers", Math.sqrt(4));
console.log("Square root of numbers", Math.sqrt(169))

//Math Pow
console.log("2 raise to 4==>", Math.pow(2, 4));
console.log("5 raise to 16==>", Math.pow(5, 16))

//DATE METHODS
console.log("new Date ==>", new Date());
console.log("Get the local date, and time ==>", new Date().toLocaleString());

console.log("The current day of the week==>", new Date().getDay());
console.log("Get the current month==>", new Date().getMonth());
console.log("Get the current year==>", new Date().getFullYear());
console.log("Get the current date==>", new Date().getDate());
console.log("Get the hour==>", new Date().getHours().toLocaleString());
console.log("Get the minute==>", new Date().getMinutes().toLocaleString());
console.log("getSeconds()", new Date().getSeconds().toLocaleString());

//Practice
console.log("new date ==>", new Date())
console.log("Get the current year==>", new Date().getFullYear())
console.log("Get the current month==>", new Date().getMonth())
console.log("Get the hour==>", new Date().getHours().toLocaleString())


console.log(
  "Get the hour sith text expression==>",
  `${new Date().getHours().toLocaleString()} hrs ago`
)
console.log("Get the current time ==>", new Date().toLocaleTimeString());
console.log(
  "Returns a date as a string value in ISO format ==>",
  new Date().toISOString()
);

//pratice
console.log("Get the hour sith text expressions==>", `${new Date().getHours().toLocaleString()} hrs ago`)
console.log("Get the current time ==>", new Date().toLocaleTimeString())
console.log("Returns a date as a string value in ISO format==>", new Date().toISOString())

//VARIABLE.JS
//pratice
let myname ="Aliyah";
let MyName = "kemi";
console.log(myname)

let myAge =17
console.log(myAge)

myAge = 23;
console.log(myAge);

myAge = 97;
console.log(myAge)

//const keyword
const PI = Math.PI;
console.log(PI);

let Firstname = "Aliyah"
let Lastname = "Adunni"
let Fullname = Firstname + " " + Lastname
console.log("Fullname==>", Fullname)

// let myFirstname = "liyah";
// let myLastname = "Adunni";
// let myMiddlename = "Omoyetunde";
// const myFullName = `${myFirstName} ${myMiddleName[0]} ${myLastName}`;
// console.log("myFullname==>", myFullname);


//Arithmetic operators
let x = 40;
let y = 15;
const z = x + y;
console.log(z);

let a = 9 - 2
let b = 15 - 8
const c = a + b
console.log(c);

let s = 10;
let t = 7;
const u = s - t;
console.log(u);

let p = 21;
let q = 3;
const r = p / q;
console.log(r);

let m = 4;
let n = 22;
const o = m * n;
console.log(o);

let d = 10;
let e = 3;
const result = d % e;

//Logical operators
let isAdmin = true;
let isLoggedIn = true;

let checkIfEmployeeIsAnAdmin = isAdmin && isLoggedIn;
console.log("checkIfEmployeeIsAnAdmin", checkIfEmployeeIsAnAdmin);

let verifyIfEmployeeIsAnAdmin = !isAdmin && isLoggedIn;
console.log("verifyIfEmployeeIsAnAdmin", verifyIfEmployeeIsAnAdmin);

//Decremental operator and Incremental operator
let myFruitBasket = 10;
myFruitBasket++;
console.log("myFruitBasket", myFruitBasket);

// For decremental operator
let w = 30;
w = w - 2;
console.log("w==>", w);

let k = 45;
k = k + 5;
console.log("k ==>", k);

//Variable classwork
let mySchool = "Marusoft Technologies"
console.log(mySchool)

// const radiusOfTheEarth = 6400
// console.log(radiusOfTheEarth)
// radiusOfTheEarth = 7500

//concatination classwork
//old way
let firstName = "Aliyah";
let lastName = "Adunni";
let fullName = firstName + " " + lastName;
// new way of concatenation
let FullName = `${firstName} ${lastName}`
console.log("FullName==>", FullName);
console.log("New way of Joining Strings", FullName);

//Logical operators
let isStudent = true;
let isGraduated = false;
let isAdmitted = true;

let Check = isAdmitted && isGraduated
console.log("Check =", check)

let confirmExpression = isStudent && isAdmitted
console.log("Check =", check)

// claaswork 2
let isUsers = true;
let isLogin = true;
let isTeacher = false;

let verify = isUsers || isLogin
console.log("Verify =", verify)


let verifyIfTheStatement = isLogin || isTeacher
console.log("verifyIfTheStatement =", verifyIfTheStatement);
//Incremental and Decremental operator
let numberOfWatermelon = 95;
numberOfWatermelon++
numberOfWatermelon = numberOfWatermelon + 16;
console.log("numberOfWatermelon =", numberOfWatermelon)

let numberOfApple = 65;
numberOfApple--
numberOfApple = numberOfApple - 35;
console.log("numberOfApple =", numberOfApple);


