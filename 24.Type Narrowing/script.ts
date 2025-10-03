//>>> Type guards :

// Define a union TYPE :
type MyType = string | number;

// Example function with TYPE GUARD :
function exampleFunction(value: MyType): void {
  //>Type guard using typeof
  if (typeof value === "string") {
    //> Within this block, TypeScript knows that "value" is a string
    console.log(value.toUpperCase());
  } else {
    //> Within this block, TypeScript knows that "value" is a number
    console.log(value.toFixed(2));
  }
}

// Example usage :
exampleFunction("JOJO"); // JOJO
exampleFunction(1999); // 1999.00

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Intersection operator :

class Dog {
  bark(): void {
    console.log("Woff!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

// Example function with instanceof type guard
function animalSound(animal: Dog | Cat /*class either dog or cat*/): void {
  if (animal instanceof Dog) {
    //> Within this block, TypeScript knows that "animal" is an instance of Dog
    animal.bark();
  } else {
    //> Within this block, TypeScript knows that "animal" is an instance of Cat
    animal.meow();
  }
}

// Example USAGE :
const myDog = new Dog();
const myCat = new Cat();

console.log(myDog); // Dog {}
console.log(myCat); // Cat {}
animalSound(myDog); // Woff!
animalSound(myCat); // Meow!

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  Intersection type :

// Define two types:
type Employee = {
  id: number;
  name: string;
};
type Manager = {
  department: string;
  role: string;
};

// Create an intersection type:
type ManagerWithEmployee = Employee & Manager;

// Example usage :
const manager: ManagerWithEmployee = {
  id: 123,
  name: "JoJo",
  department: "MERN",
  role: "Team Lead",
};

console.log(manager.id); // 123
console.log(manager.name); // JoJO
console.log(manager.department); // MERN
console.log(manager.role); // Team Lead
