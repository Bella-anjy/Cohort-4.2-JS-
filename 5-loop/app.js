/**
 * Loop
 * Types of Loop
 * For loop
 * Do Loop
 * While loop
 */
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

/**
 * For loop
 * let i = 0 startibg position
 * i < array.length; destination or stopping point of looping
 * i++ iteration step
 */

//for (let i = 0; i < array.length; i++) {

//}

/**
 *  Count 1-50  using for loop
 */
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
// Manually
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
console.log(15);
console.log(16);
console.log(17);
console.log(18);
console.log(19);
console.log(20);
console.log(21);
console.log(22);
console.log(23);
console.log(24);
console.log(25);
console.log(26);
console.log(27);
console.log(28);
console.log(29);
console.log(30);
console.log(31);
console.log(32);
console.log(33);
console.log(34);
console.log(35);
console.log(36);
console.log(37);
console.log(38);
console.log(39);
console.log(40);
console.log(41);
console.log(42);
console.log(43);
console.log(44);
console.log(45);
console.log(46);
console.log(47);
console.log(48);
console.log(49);
console.log(50);

/**
 *  Count 1-100  using for loop
 */
for (let a = 100; a >= 1; a--) {
  console.log(a);
}

console.log("======= Loop with array =========");
/**
 * For loop on array
 */
let favStadia = [
  "Teslim Balogun",
  "Nnamdi Azikiwe",
  "Obafemi Awolowo",
  "Moshood Abiola",
  "Confluence",
];
for (let p = 0; p < favStadia.length ; p++) {
  console.log(`${favStadia[p]} is one of my favorite stadia to watch live matches`);
}

/**
 * Create an array of favorite place to visit in Nigeria and  use for loop to 
 * the string `i would love to visit Igboelerin Community`
 */
let localPlaces = [
  "Ojuelegba",
  "Yaba",
  "Oshodi",
  "Mushin",
  "Ilasa",
]
for (let r = 0; r < localPlaces.length; r++) {
  console.log(r);
  console.log(`i would like to visit ${localPlaces[r]} community`);
}

let favoriteFood = [
  "Amala and Ewedu",
  "Poundo yam and Egusi",
  "Asaro elepo",
]
for (let k = 0; k < favoriteFood.length; k++) {
  console.log(k);
  console.log(`I love eating ${favoriteFood[k]}`);
}
console.log("=======Multiplication table ========");

/**
 * Multiplication table
 * 2 x 1 = 2
 * 2 x 2 = 4
 * 2 x 3 = 6
 * 2 x 4 = 8
 * 2 x 5 = 10
 */

let firstMultiplier = [
  1, 2, 3, 4, 5, 
]
let secondMultiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < firstMultiplier.length; i++) {
  for (let j = 0; j < secondMultiplier.length; j++) {
  const answer = firstMultiplier[i] * secondMultiplier[j];
  console.log(`${firstMultiplier[i]} x ${secondMultiplier[j]} = ${firstMultiplier[i] * secondMultiplier[j]}`);
  }
  
}