//   TYPE ALIASES : advantage of avoiding previous code types like , syntax : type varName (annotations/type)={property:value} ->>> const person:{firstName :sting ; lastName:string}={firstName:"jojo",lastName:"JO"};



// we code it as seperate , customizion the code types 
type Person = {
  name: string;
  age: number;
  loaction: string;
};

// using inside the function...
const printPersonInfo = (person: Person) => {
  return `Name :(${person.name}) Age:(${person.age}) Location:(${person.loaction})`;
};

const res = printPersonInfo({ name: "JOJO", age: 29, loaction: "WORLD" });
console.log(res);
