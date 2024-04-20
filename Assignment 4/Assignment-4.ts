//Assignment 4 on Basic Programming practice
//1. Declare a variable named greeting with the string value "Hello, World!" and print it.
let greetings = "Hello World";
console.log(greetings);

//2. Define two variables with integer values and calculate their sum, difference, product, and quotient.
let a: number = 2;
let b: number = 4;

// Calculate sum
let sum: number = a + b;

// Calculate difference
let difference: number = a - b;

// Calculate product
let product: number = a * b;

// Calculate quotient
let quotient: number = b / a;

console.log("sum:", sum);
console.log("difference:", difference);
console.log("product:", product);
console.log("quotient:", quotient);

//3. Swapping Values== Swap the values of two variables without using a third variable.

a = 10;
b = 20;

console.log("Before Swapping:");
console.log("a:", a);
console.log("b:", b);

// Swap values without using a third variable or array

a = a + b; //30
b = a - b; //10
a = a - b; //30-10=20
console.log("After swapping:");
console.log("a", a);
console.log("b", b);

//4. Create a string variable and try changing its type.

4; //test run
let myVariable: string = "Hello";

console.log("Before type change:");
console.log("myVariable:", myVariable);

// Attempt to change the type by reassigning a value of a different type
//myVariable = 42  ; // Assigning a number value

console.log("After type change:");
console.log("myVariable:", myVariable); // Output will be 42

//5. Use the modulus operator to find the remainder of two numbers
let num1 = 30;
let num2 = 10;
let remainder = num1 % num2;
console.log(remainder);

//6. Increment a variable's value by 1 using two different methods
//1st method
let counter = 0;
counter++;
console.log("1st method of increment in variable", counter);

//2nd method
counter += 1;
console.log("2nd method of increment in variable", counter);

//7. Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1: boolean = true;
let b1: boolean = false;
let c1: boolean = true;

// AND gate
let ANDgate: boolean = a1 && b1 && c1;
console.log(ANDgate);

// OR gate
let ORgate: boolean = a1 || b1 || c1;
console.log(ORgate);

// NOT gate (for a single variable)
let NOTgate: boolean = !a1;
console.log(NOTgate);

//8. Show examples of using compound assignment operators
let num = 10;

//Addition and Assignment (+=):
num += 3;
console.log("Addition and Assignment after (+=)", num);

//Subtraction and Assignment (-=):
num -= 3;
console.log(num);

//Multiplication and Assignment (*=):
num *= 3;
console.log(num);

//Division and Assignment (/=):
num /= 3;
console.log(num);

//Modulus and Assignment (%=):
num %= 3;
console.log(num);

//9. Write a program to check if a number is even or odd.
num = 5;
if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//10.Check if a person is eligible to vote.
num = 18;
if (num >= 18) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

//11.  Assign a grade based on a numerical score.

let score = 99;
if (score >= 90 && score <= 100) {
  console.log("Grade A");
} else if (score >= 80 && score < 90) {
  console.log("Grade B");
} else if (score >= 70 && score < 80) {
  console.log("Grade C");
}

//12. Find the maximum of three numbers.
let x = 90;
let y = 80;
let z = 70;

function findMax(x: number, y: number, z: number): number {
  return Math.max(x, y, z);
}
console.log(findMax);

//13. Check if a given year is a leap year.

function isLeapYear(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Test the function with some years
console.log("Is 2024 a leap year?", isLeapYear(2024));

//14.
function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

// Test the function with some temperatures in Fahrenheit
const fahrenheitTemp: number = 98.6;
const celsiusTemp: number = fahrenheitToCelsius(fahrenheitTemp);

console.log(
  `${fahrenheitTemp} degrees Fahrenheit is equal to ${celsiusTemp.toFixed(
    2
  )} degrees Celsius.`
);

//15. Check if a number is positive, negative, or zero.
function checkNumber(number: number): string {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

// Test the function with some numbers
console.log(checkNumber(5)); // Output: positive
console.log(checkNumber(-3)); // Output: negative
console.log(checkNumber(0)); // Output: zero


//16.Write a program that prints the multiplication table of a given number up to 10.
function printMultiplicationTable(number: number): void {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

// Test the function with a given number
printMultiplicationTable(5);

