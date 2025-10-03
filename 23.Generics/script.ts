// >>>  GENERICS <<<

// REGULAR FUNCTION : DATATYPE-reservedKeyword-(function peremeter){//}
/// EX : 1
const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: Boolean) => console.log(x);
console.log(printString("JOJO")); // JOJO
console.log(printNumber(2)); // 2
console.log(printBoolean(true)); // true

/// EX : 2
function printNumbers(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}
function printStrings(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}
function printBooleans(
  item: Boolean,
  defaultValue: Boolean
): [Boolean, Boolean] {
  return [item, defaultValue];
}
const num = printNumbers(1, 2);
console.log(num); // [ 1, 2 ]
const str = printStrings("JOTARO", "KUJO");
console.log(str); // [ 'JOTARO', 'KUJO' ]
const boo = printBooleans(true, false);
console.log(boo); // [ true, false ]
/* drawback of using rugular function is -> in function statement we code for number_datatype to number , srting_datatype to string and boolean-datatype to boolean😭 > we can't use number to string and string to boolean so , we using GENERIC-function */

// like we can code by using[any] then we can't assume ROLL as TYPESCRIPT on this code??? - WE DON'T SEE ANY *TYPES* ON THIS CODE...!
function printAny(item: any, defaultValue: any): [any, any] {
  return [item, defaultValue];
}
const anyS = printAny(1, "Sun and Moon");
console.log(anyS); // [ 1, 'Sun and Moon' ]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// GENERIC FUNCTION : function-reservedKEYWORD-<TYPE peremeter>(FUNCTION parameter):/returnTYPE/ {//}

// using peremeter to peremeter
function uniqueDataTypesFun<type>(
  /*peremeter*/ item: type /* using peremeter  again same as <> */,
  defaultValue: type /* using peremeter  again same as <> */
): [type, type] /*using 2 return TYPE peremeters*/ {
  return [item, defaultValue];
}

const res1 = uniqueDataTypesFun<number>(20, 89);
console.log(res1); // [ 20, 89 ]
const res2 = uniqueDataTypesFun<string>("Hello", "There");
console.log(res2); // [ 'Hello', 'There' ]
const res3 = uniqueDataTypesFun<Boolean>(false, true);
console.log(res3); // [ false, true ]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// we can create own type and interface...
function uniqueDataTypes<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypes<Dog>(
  {
    name: "Buddy",
    breed: "labrador",
  },
  {
    name: "iggy",
    breed: "unknow",
  }
);

console.log(dog1);
/* [
  { name: 'Buddy', breed: 'labrador' },
  { name: 'iggy', breed: 'unknow' }
   ]  */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// GENERIC FUNCTION : to get random KEY VALUES FROM OBJECT
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T; // will be any type!
} /*return_type */ {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomString = getRandomKeyValuePair<string>(stringObject);
console.log(stringObject); //{ a: 'apple', b: 'banana', c: 'cherry' }

const numberObject = { one: 1, two: 2, three: 3, four: 4 };
const randomNumber = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumber); //{ key: 'four', value: 4 }
/*
{https://chatgpt.com/c/68dd67f1-bd5c-832b-ad41-24c09ec08f82]
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function filterArray<T>(
  array: T[],
  condition: (item: T) => boolean /*return the boolean*/
): T[] {
  return array.filter((item) => condition(item));
}

// creating ARRAY to perform :
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // [ 2, 4, 6, 8 ]

// using ARRAY of string :
const stringArr = ["apple", "banana", "cherry", "dragon_fruit"];
const shortWord = filterArray<string>(stringArr, (word) => word.length < 6);
console.log(shortWord); // [ 'apple' ]

// using INTERFACE :
interface Fruit {
  name: string;
  color: string;
}
const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);
console.log(redFruits); // [ { name: 'Apple', color: 'Red' }, { name: 'Cherry', color: 'Red' } ]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// GERNERIC function with muiltple TYPES :
function reversePair<T, U>(
  value1: T,
  value2: U
): [U, T] /*now reversing the TYPE*/ {
  return [value2, value1];
}

const reversedPair = reversePair("hello", 29);
console.log(reversedPair); // [ 29, 'hello' ]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// GERNERIC classes :
class Box<T> {
  private content: T;

  constructor(initalContent: T) {
    this.content = initalContent;
  }

  // getting [private] data
  getContent(): T {
    return this.content;
  }

  // if any thing to change , by using [setContent]
  setContent(newContent: T): void /*not return anything*/ {
    this.content = newContent;
  }
}

// STRING :
const srtingBox = new Box<string>("Hello , TypeScript");
console.log(srtingBox.getContent()); // Hello , TypeScript
srtingBox.setContent("New Content ADDED");
console.log(srtingBox.getContent()); // New Content ADDED
// NUMBER :
const numberBox = new Box<number>(29);
console.log(numberBox.getContent()); // 29
numberBox.setContent(1000);
console.log(numberBox.getContent()); // 1000

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>