// Primitive types, the most basic types in JS
let my_name = "Tanya";
const age = 19;

confirm.log(my_name);
confirm.log(age);

let x = 5;
let y = 10;
let sum = x + y;
console.log("sum is:", sum);

// Data Types

let first_name = "Lily"
console.log("This is a string:", first_name)

// Number

const myAge = 20;
console.log("This is a number:", myAge);

//Boolean
let isAStudent = true;
console.log("This is a boolean:", isAStudent);

//Null = empty
const myNull = null;
console.log("myNull");

//Underfined = uninitialized or missing value
myUndefinedConst = undefined
console.log("myUndefinedConst");

//Type of, will tell you what type of variable it is
//Example
myUndefinedConst = undefined
console.log(typeof myUndefinedConst);

//Object Type, more complex(key-value pairs and functions)
//Object = represents a collextion of key-value pairs enclosed in { }
let person = {
    fName: "Jane",
    lName: "Doe",
    age: 22
};

console.log(person);

//Array = represents an order list of values
const students = ['Tyler', 'Tanya']
console.log(students);

//Functions = reusable block of codes that can be ivole by name
function fullName(){
  const firstName = "Ella";
  const lastName = "Smith";

  console.log("Full name is:", firstName, lastName)
}
fullName('Ella', 'Smith');

function movieName(firstWord = 'The', secWord ='Avengers'){
  return firstWord + secWord;
}