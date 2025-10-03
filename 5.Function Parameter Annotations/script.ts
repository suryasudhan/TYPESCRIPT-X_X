// FUNCTION :

//> Regular Func :
function addOne(num: number) {
  return num + 29;
}
const result = addOne(1);
console.log(result);

// Arrow Func Annotations :
const double = (x: number, Y: number) => x * Y;
const res = double(2, 10);
console.log(res);

/*

NOTES >>> 

const double = (x: number, Y: number) => x * Y;
const res = double(2, 10 ,3); /*Expected 2 arguments, but got 3 - popup an ERROR
console.log(res);

=> Also notice , TypeScript will gives you warining if you provide more or less arguments then you specify in your parameters area...

*/
