 /**
 * Introduction to Classes
 * An object-oriented programming (OOP) in JavaScript
 * can be used to model real-world examples
 * To create a class, we write the class keyword
 * followed by class name with the first letter
 * capitalize
 */

//iilustration
// class ClassName {}
// For instance , to create a student record class

// class StudentProfile {}

/**
 * Constructor
 * Constructor is the method JavaScript calls every time
 * it creates a new instance of a class.
 * When using this inside a constructor function, it refers to the new instance of the object created
 * by the constructor.
 */

class StudentProfile {
  constructor(name, courseLevel, age, address, gender, matricNumber) {
    this.name = name;
    this.courseLevel = courseLevel;
    this.age = age;
    this.address = address;
    this.gender = gender;
    this.matricNumber = matricNumber;
  }
}

/**
 * Instance of a Class
 * An instance is an object that contains the
 * property names and methods of a class,
 * but with unique property values.
 * To create a instance of a class, we use the 'new' keyword
 * followed by classname with parentheses.
 * The 'new' keyword calls the constructor(), runs the code
 * inside of it, and then returns the new instance.
 */
const alimiProfile = new StudentProfile(
  "Alimi Kehinde",
  "300L",
  25,
  "1200, Orinla Avenue, off Beesam",
  "Male",
  9087654
);
console.log("alimiProfile", alimiProfile);

// Class work:
// Create a JS class named HospitalRecord, add the following parameters to the constructor object/method firstname, lastname, wardNumber, addmissionDate, discahrgeDate, hospitalName, and
// patientIllness. Create atmost three instance of the HospitalRecord class.

/**
 * Class Method, we are going to use
 * the 'get' keyword with property names
 * followed by a parentheses and curly
 * brace. The property names will be
 * prepended with underscores
 * which indicate these properties should not
 * be accessed directly(private properties).
 */

class Garage {
  constructor(
    carMake,
    carColor,
    carBrand,
    plateNumber,
    engineNumber,
    carModel,
    chasisNumber
  ) {
    this._carMake = carMake;
    this._carBrand = carBrand;
    this._plateNumber = plateNumber;
    this._engineNumber = engineNumber;
    this._carModel = carModel;
    this._chasisNumber = chasisNumber;
    this._carColor = carColor;
    this._carTotal = 2000;
  }

  get carManufacturer() {
    return this._carMake;
  }
  get carAppearance() {
    return this._carColor;
  }
  get carIdentity() {
    return this._chasisNumber;
  }
  get getVersion() {
    return this._carModel;
  }
  get totalNumberOfCars() {
    return this._carTotal;
  }
  currentCarTotal() {
    return (this._carTotal = this._carTotal - 500);
  }
  addMoreCars() {
    return this._carTotal++;
  }
}

const toyotaCamry = new Garage(
  "Toyota",
  "Black",
  "Camry",
  "LAG 123 MUS",
  "EA12345678999",
  "2021",
  "JFZ12U23U18864"
);
console.log("toyotaCamry==>", toyotaCamry);
// total cars in garage
// add new cars
let addMoreCars = toyotaCamry.addMoreCars();
console.log("toyotaCamry", toyotaCamry._carTotal);

// get current car total
console.log("currentCarTotal", toyotaCamry.currentCarTotal());

// get car color

let color = toyotaCamry.carAppearance;
console.log("color", color);

//Assignment
/**
 * Create a class BookStore, with a constructor that takes "title" and "bookType"
 * and extra properties called "availableBooks" with initial value of 50.
 * create a getter methods that will get the book title, bookType and availableBooks.
 * create custom method called remainingBooks that takes a parameter named "removeBooks".
 * Create an instances of the book Class with value of choice, log the book "title"
 * and if for example someone lend three(3) books from BookStore class, then called the
 * book instance on "availableBooks" to get the number of books available in the store.
 */
/**
 * Principles of OOP
 * 1. Inheritance
 * 2. Polymorphism
 * 3. Abstraction
 * 4. Encapsulation
 */
 /* Inheritance
 * A process where multiple classes share properties or methods
 * with their parent class(superclass)
 * It is a way whereby child classes inherit the properties
 * and methods from their parent class
 * Below is a parent class created called Animal
 */
//  ======= Parent Class(Superclass) ======
class Animal {
  constructor(name, kingdom) {
    this._name = name;
    this._kingdom = kingdom;
    this._numberOfFeedTime = 3;
  }
  get name() {
    return this._name;
  }

  get numberOfFeedTime() {
    return this._numberOfFeedTime;
  }
  incrementNumberOfFeedTime(feedTime) {
    return (this._numberOfFeedTime += feedTime);
  }
}

// ======= Child Class (Subclasses) =======

// class Lion {
//   constructor() {}
// }

// class Elephant {
//   constructor() {}
// }

/**
 * Extending Properties and Methods of the
 * Parent class(Superclass) to a Child class(Subclass)
 * Lion, Elephant using the 'extends' keyword
 * The extends keyword makes the methods of
 * the animal class available inside the lion class.
 * The super keyword calls the constructor of the parent class.
 * In this case, super(name) passes the name argument of
 * the Lion class to the constructor of the Animal class.
 */

class Lion extends Animal {
  constructor(name, kingdom, mane, habitats) {
    super(name, kingdom);
    this._mane = mane;
    this._habitats = habitats;
  }
  get niche() {
    return this._habitats;
  }
  addNiche(newNiche) {
    return this._habitats.push(newNiche);
  }
}
// instance of class Lion
let scarLion = new Lion("Scar", "kingdom animalia", true, [
  "Grassland",
  "Savanna",
  "Scrubland",
]);
console.log(scarLion);
scarLion.addNiche("Semi-Desert Region");
console.log(scarLion);
console.log(scarLion.incrementNumberOfFeedTime(15));
console.log(scarLion._numberOfFeedTime);

/**
 * Static Methods 1
 * Are methods that can be called directly from a class
 * that are not available in individual class instances.
 * Static methods are called on the class
 */

class Vehicle {
  constructor(vehicleType) {
    this._vehicleType = vehicleType;
    this._behavior = 0;
  }

  static generateVehicleTypes() {
    const vehicleTypes = [
      "Bus",
      "Van",
      "Taxi",
      "Skateboard",
      "Forklift",
      "Crane",
      "Helicopter",
    ];
    const randomNumber = Math.floor(Math.random() * 7);
    console.log("current randomNumber =>", randomNumber);
    return vehicleTypes[randomNumber];
  }
}

/**
 * In the example above, we create a static method
 * called .generateName() that returns a random vehicleType
 * when it's called. Because of the static keyword,
 * we can only access .generateName() by appending it to the Animal class.
 */
console.log(Vehicle.generateVehicleTypes()); // return a vehicleType

/**
 * Static Methods 2
 */
class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  static comparePrice(a, b) {
    if (a.price > b.price) {
      return `${a.name} costs more`;
    } else if (b.price > a.price) {
      return `${b.name} costs more`;
    } else {
      return `both same price`;
    }
  }
}
const audi = new Car("Audi", 12);
const tata = new Car("Tata", 9);
const kia = new Car("Kia", 9);
console.log(Car.comparePrice(audi, kia));

// classwork: create a class called BookShop, with two parameters(bookType, bookPrice). Create a static method to check for book with the lowest cost.

class BookShop {
  constructor(bookType, bookPrice){
    this.bookType = bookType
    this.bookPrice = bookPrice
  }

  static checkBookWithLowestPrice(firstBook, secondBook){
    if(firstBook.bookPrice < secondBook.bookPrice){
      return `${firstBook.bookType} has the lowest price`
    }
    else if(secondBook.bookType < firstBook.bookType){
      return `${secondBook.bookType} has the lowest price`;
    }
  }
}
let scienceBooks = new BookShop("Engineering Mathematics", 10000)
let englishTextBooks = new BookShop("Common Mistake In English Lnaguage", 2000)
console.log(BookShop.checkBookWithLowestPrice(scienceBooks, englishTextBooks))