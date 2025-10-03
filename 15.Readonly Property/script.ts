type Person = {
  name: string;
  age: number;
  email?: string;
  readonly location: string;
};



const alice: Person = { name: "JOJO", age: 29, location: "earth" };
const bob: Person = {
  name: "jojo",
  age: 29,
  email: "JOJO@gamil.com",
  location: "pluto",
};

alice.location="the world"; //Cannot assign to 'location' because it is a read-only property.ts(2540)


console.log(alice);
console.log(bob);
