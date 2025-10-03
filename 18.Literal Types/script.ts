//  LITERAL TYPES :

/* 
// String Literal Type :
let color: "red" | "blue" | "green";
color = "red"; // valid
color = "black"; // invalid

// Boolean Literal Type :
let isTrue: true;
isTrue = true; //valid
isTrue = false; // invalid

// Number Literal Types
let number: 1 | 2 | 3;
number = 1; // valid
number = 10; // invalid
*/

// String Literal Type :
let color: "red" | "blue" | "green";
color = "red"; // valid
//color = "black"; // invalid ->Type '"black"' is not assignable to type '"red" | "blue" | "green"'
console.log(color);


// asigning same values to TYPES
let password:"secretPassword"="secretPassword";
password ="something else" //Type '"something else"' is not assignable to type '"secretPassword"'
console.log(password);