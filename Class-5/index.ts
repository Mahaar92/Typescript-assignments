//Funtions
function funtionName() {
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  //funtion body written in curly braces
}

//funtion calling
funtionName();
funtionName();
funtionName();

//funtion parameters

function functionName2() {
  console.log("Hello worlds");
  return 34;
}
functionName2();

//permitive data type can have signle value ... non permitive can store more than one value in a variable
// Array is declared by let or const..  syntax of array is square bracket []
//array can be of numbers , strings, boolean , or undefined
const fruits = ["apple", "strawberrry", "banana", "orange"];
const numbers = [1, 2, 3, "banana"];
console.log(fruits);
console.log(numbers[2]);
console.log(fruits.length);

//print array values (index=0)
//arrayName(index)
console.log(fruits[2]);
console.log(fruits[5]);

//array methods
//push (value) add value at the end of index
fruits.push("grapes");
console.log(fruits.length);

//pop (delete) from the array
fruits.pop();
console.log(fruits);

//ramove value from first or add at first
//by shift or unshift
fruits.unshift("mango");
console.log(fruits);

fruits.shift();
console.log(fruits);

//add value at mid of array
//splice() is used to add or remove value at a specific

const fruits2 = ["2", "4", "6", "8", "10"];
console.log(fruits2);

fruits2.slice(1);
console.log(fruits2);

fruits2.splice(1, 1, "yango");
console.log(fruits2);

const fruits5 = ["2w", "4r", "6t", "8y", "10u"];
const array5 = fruits5.slice(2, 4); //slice method last index is not included
console.log(array5);
