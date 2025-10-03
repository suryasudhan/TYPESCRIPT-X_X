// A function that always throws an error :
function throwError(msg: string): never {
  throw new Error(msg);
}

// A fuction that has an infinite loop
function infiniteLoop(): never {
  while (true) {}
}

// A variable that can never have a value :
let x: never;

function neverReturn(): never {
  while (true) {}
}
x = neverReturn();//X is infinite loop so, THis line will cause a compile-time error because the function never returns
