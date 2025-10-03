// Function returning a number ;
function add(a: number, b: number): number {
  return a + b;
}
const res1 = add(5, 5);
console.log(res1);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Function returning a string :
function greet(name: string): string {
  return `Hello , ${name}`;
}
const res2 = greet("JoJo");
console.log(res2);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/* Function must return something or not

* if your function returns a value -> you can tell Typescript what type it should...

* if your function doesn't retun anything (just does a task like printing)-> we mark it as [void]
*/
function logMessage(msg: string): void {
  console.log(msg);
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Function returning promise
async function fetchData(): Promise<string> {
  return "data loaded";
}
/*
@Because it’s async, it always returns a Promise.

@We tell TS → the promise will eventually resolve into a string. 
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Function returning union type
function getStatus(code: number): string | null {
  if (code === 200) return "OK";
  return null;
}
/*
✅ Function returns one of multiple types (Union)

@Sometimes it returns a string, sometimes null.

@That’s why the return annotation is string | null (a union of both types).
*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// using Arrow function:

const double2 = (x: number): number => x * 3;
const res3 = double2(2);
console.log(res3);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>