//  INTERSECTION TYPES : COMIBINES THE MUILTPLE TYPES!!!

// FIST TYPE
type Person = {
  name: string;
  age: number;
};
// SECOND TYPE
type Employee = {
  id: number;
  title: string;
};

//[combine multiple types]
type PersonAndEmployee = Person & Employee;

// we , using them into codes ,
const alice: PersonAndEmployee = {
  name: "JOJO",
  age: 29,
  id: 123,
  title: "Manager",
};

console.log(alice);
console.log(
  `Name :${alice.name} , Age:${alice.age} , Id:${alice.id} , Title:${alice.title}`
);

