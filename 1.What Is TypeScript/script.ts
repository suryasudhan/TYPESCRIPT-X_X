//! ⚡ Example: Basic TypeScript ...

function add(a: number, b: number): number {
  return a + b;
}
let result = add(5, 10);
console.log(result); // 15 

/*
This will throw an error during eompilation 
let result2 = add("5","10"); // ❌ Type 'string' is not assignable to type 'number'
*/

//>........................................................

//! interface Example ...

// interface Person {
//   name: string;
//   age: number;
//   greet(): void;
// }

// const user: Person = {
//   name: "JoJo",
//   age: 18,
//   greet() {
//     console.log(`Hey , I'm ${this.name} and I'm ${this.age} yeats old...`);
//   },
// };

// user.greet();

//>........................................................
