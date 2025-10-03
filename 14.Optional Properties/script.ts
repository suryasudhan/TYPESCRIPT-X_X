type Person = {
  name: string;
  age: number;
  email?: string;
};

const alice: Person = { name: "JOJO", age: 29 };
const bob: Person = {
  name: "jojo",
  age: 29,
  email: "JOJO@gamil.com",
};

console.log(alice);
console.log(bob);
