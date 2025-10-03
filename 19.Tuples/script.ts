// Tuples :
let myTuple1: [string, number] = ["jojo", 18];
console.log(myTuple1[0]); // jojo
console.log(myTuple1[1]); // 18

// Destructuring individual Element :
let myTuple: [string, number] = ["hello", 29];
let [first, second] = myTuple;
console.log(first); // "hello"
console.log(second); // 29

// REASON TO USE TUPLES ...
let myTuple2: [string, number] ;
myTuple2=[ 18,"joline"]; // Type 'string' is not assignable to type 'number' | we made a strucher like [string, number] -> if change against the strucher leds to error!!!
console.log(myTuple2[0]); // jojo
console.log(myTuple2[1]);