// syntax :[ type varName(annotations/type)={property:value}]

// OBJECT
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "JoJo",
  lastName: "sudhan",
  age: 29,
}; // if we miss any of the object like in this age:29 , we get an error so , we need to updata what we mentioned on parameter
console.log(person);
console.log(`Name :${person.firstName} ${person.lastName},${person.age}`);



// OBJECTS AS FUNCTION RETURN VALUE :
// Using objects as function return value >>>
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "JOJO's",
    age: 20,
    location: "WORLD",
  };
}
const res = printUser();
console.log(res);
