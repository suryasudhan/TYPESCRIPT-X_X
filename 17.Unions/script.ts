//  UNIONS :

let password: string | number = "gateway"; // or we write a number too , but we cant write as ->boolen operation

type UserInfo = {
  first: string;
  last: string;
  age: Number;
};

type AccountDetails = {
  email: string;
  password: string | number;
};

// we can use from UserInfo or AccountDetails => even we use both !
let user: UserInfo | AccountDetails = {
  first: "JOJO",
  last: "Kujo",
  age: 20,
};
console.log(user);

let user1: UserInfo | AccountDetails = {
  email: "JOJO@gmail.com",
  password: 123444,
};
console.log(user1);

// we can you to write the code with ARRAY AND ARRAY WITH STRING!!!
const items: (number | string)[] = [1, 2, 3, "JOJO-KUJO"]; //if we writer boolen thing we get an error cus we didn't mentioned
console.log(items);
