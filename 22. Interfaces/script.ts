// INTERFACE  DEFINITION :
interface Person {
  readonly firstName: string; // we can't change the property after assigned
  lastName: string;
  age?: number; // [?]-meaning for optional we can use or don't use,completly optional...
}
// USAGE :
const examplePerson: Person = {
  firstName: "JOJO",
  lastName: "KUJO",
  age: 29,
};
// examplePerson.firstName="jeet"; ->Cannot assign to 'firstName' because it is a read-only property,getting error due to [readonly]
console.log(examplePerson.firstName); // JOJO
console.log(examplePerson.lastName); // KUJO
console.log(examplePerson.age); // 29

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// INTERFACE FOR FUNCTION :
interface MathOperation {
  (x: number, y: number): number;
}
// USAGE :
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
console.log(add(5, 5)); // 10
console.log(subtract(100, 50)); // 50

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// INTERFACE FOR A CLASS :
// defining CLASS!
interface Vehicle {
  start(): void; // using void due to we'r not returning somthig form that*
  stop(): void; // using void due to we'r not returning somthig form that*
}

// CLASS IMPLEMENTION THE INTERFACE : we using [IMPLEMENTS] not [extends]
// SETTING!
class Car implements Vehicle {
  start(): void {
    console.log("Car started");
  }
  stop(): void {
    console.log("Car stopped");
  }
}

// USAGE :
const myCar = new Car();
myCar.start(); // Car started
myCar.stop(); // Car stopped

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// INTERFACE FOR METHODS :
interface Person1 {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void; // we don't return anyting so , we using [void]
}

function greet(person: Person1) {
  console.log(`Hello , ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

// creating seperate OBJECT
const res1: Person1 = {
  firstName: "JOTARO",
  lastName: "KUJO",
  age: 29,
  sayHello() {
    console.log("Hi There!!!");
  },
};

const res2: Person1 = {
  firstName: "ICHIGO",
  lastName: "BANKAI",
  age: 18,
  sayHello() {
    console.log("What's GOOD!!!");
  },
};

// console :
greet(res1);
greet(res2);
/* Hello , JOTARO KUJO
Hi There!!!
Hello , ICHIGO BANKAI
What's GOOD!!! */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  EXTENDING INTERFACE | BOROWING FUNCTIONALITY PARENT INTERFACE TO CHILDREN INTERFACE :
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMOvieInfo(name: string, price: number, ratings: number): string | number; // [|]-used for either string or number
}
// creating new [MovieGenra] and borowing all the functionality from [MovieDetails]
interface MovieGenra extends MovieDetails {
  genra: string;
}
// USAGE :
const movie1: MovieGenra = {
  name: "JJBA",
  ratings: 10,
  genra: "Advanture",
  printMOvieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name:${name} Price:${price} Ratings:${ratings}`;
  },
};

const result = movie1.printMOvieInfo("STARDUST CRUSADER", 100, 10);
console.log(result); // Movie name:STARDUST CRUSADER Price:100 Ratings:10

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  DECLARATION MERGING :

// ORIGINAL INERFACE :
interface Cars {
  brand: string;
  start(): void;
}

//  DECLARATION MERGING (interface extension):
interface Cars {
  model: string;
  stop(): void;
}

// USAGE OF THE EXTENDED INTERFACE :
const myCars: Cars = {
  brand: "B M W",
  model: "M4",
  start() {
    console.log("CAR-STARTED");
  },
  stop() {
    console.log("CAR-STOPED");
  },
};
console.log(myCars.brand); // B M W
console.log(myCars.model); // M4
myCars.start(); // CAR-STARTED
myCars.stop(); // CAR-STOPED

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>