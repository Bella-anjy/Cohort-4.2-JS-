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