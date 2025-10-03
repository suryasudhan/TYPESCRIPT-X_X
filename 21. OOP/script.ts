// CLASS PROPERTIES ANNOTATIONS :
class Person {
  // field
  // readonly ->we only access the property | can't change the property
  readonly name: string;
  readonly age: number;

  // constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("JOJO", 29);
console.log(person); // Person { name: 'JOJO', age: 29 }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  ACCESS MODIFIERS : (piblic | private | protected)
//>> piblic:
class Person1 {
  public first: string;
  public last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
let r1 = new Person1("JOJO", "DEO");
console.log(r1.first);
console.log(r1.last);

//>>private
class Person2 {
  private first: string;
  private last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  getName(): string {
    return `${this.first} ${this.last}`;
  }
}
let r2 = new Person2("JOJO", "DEO");
console.log(r2.first); // POP-UP an error->Property 'first' is private and only accessible within class 'Person2'. | TO AVOIDE this problem we create another FIELS!
console.log(r2.getName()); //JOJO DEO

//  protected : we can access inside , extend the classess*
class Person3 {
  public first: string;
  private last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName(): string {
    return `${this.first} ${this.last} Age:${this.age}`;
  }
}

// we borowing funtionality from Person3 by using [extend]
class Human extends Person3 {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
  }
}

const result = new Human("Joseph", "kars", 1000);
console.log(result); //{ first: 'Joseph', last: 'kars', age: 1000 }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// GETTERS & SETTERS :

class myClass {
  private _myProperty: number = 0; //initializing 0 at start
  get myProperty(): number {
    return this._myProperty;
  }
  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myData = new myClass();
console.log(`Current Value:${myData.myProperty}`); // Current Value:0 | we getting privated -> value from get & set ...
// we can asign value too
myData.myProperty = 29;
console.log(`Current Value:${myData.myProperty}`); //Current Value:29
