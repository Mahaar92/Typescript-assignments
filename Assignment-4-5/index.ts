//Write a script to log "Hello, World!" to the console.
console.log("Hello World");

//Create a variable temperature and assign it a value. Then log "It's cold!
//" if the temperature is below 20 degrees Celsius.
const temperature = 15;
if (temperature < 20) {
  console.log("its cold water");
} else {
  console.log("its not that cold");
}

//Use arithmetic operators to solve the problem:
//If you have 10 apples and you give away 3, how many do you have left?
//Log the result.
const totalapples = 10;
const applesdonated = 3;
const remainingapples = totalapples - applesdonated;
console.log(`you have remaining apples`, remainingapples);

//Declare two variables, firstName and lastName, then create a third variable
//fullName that combines them. Log the result.
const firstName = "Muhammad";
const LastName = "Ahmad";
const fullName = `${firstName}${LastName}`;
console.log(fullName);

//Write a TypeScript code that uses a comparison operator to check if the number 5
// is greater than 3. Log "Yes" if true, otherwise log "No".
const checknumber = 5;
if (checknumber > 5) {
  console.log("yes");
} else {
  console.log("no");
}

//Create a function calculateArea that takes the radius of a circle as an
//input and returns the area of the circle.
const radius = 5;

console.log(
  `The area of a circle with radius ${radius} is approximately ${
    3.14 * radius ** 2
  }`
);

//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz"
//instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
  const multipleof3 = i % 3 === 0;
  const multipleof5 = i % 5 === 0;

  if (multipleof3 && multipleof5) {
    console.log("FizzBuzz");
  } else if (multipleof3) {
    console.log("Fizz");
  } else if (multipleof3) {
    console.log("Buzz");
  }
}

//Define an array temperatures with at least five different temperatures (numbers).
//Write a script to find and log the highest temperature.

const temperatures = [25, 28, 30, 22, 27];

const highestTemperature = Math.max(25, 28, 30, 22, 27);

console.log(`The highest temperature is ${highestTemperature}°C.`);


//Create a script that prompts the user to enter their age and then
// logs whether they are a minor (under 18) or an adult.
function Ageinput(age:number){
    let Ageinput=(1-100);
    const whatisyourage=prompt("what is your age");
    

    if (age>=18){
        console.log("You are an adult.");
    }
    else if (age < 18) {
        console.log("You are a minor.");



}

//Write a function that takes an array of numbers and returns the count 
//of positive numbers in the array.
function returnpositive(array:number[]){
    const myArray = [1, -2, 3, -4, 5];
    for (let i = 1; i <= 5; i++)
        const positivenumber=i>0
        
        if(i>0){
      count++;}
        console.log(returnpositive)
}

const numbers = [-2, 5, 0, 10, -7, 3];
console.log("Count of positive numbers:", positivenumber);


//Write a function that takes an array of words and returns 
//a new array containing only the words that start with the letter 'a'.

function arrayofwords(words:string[]):String[]{
    const wordsStartingWithA = words.filter(word => word.toLowerCase().startsWith('a'));
  return wordsStartingWithA;

}

const words = ["Apple", "Banana", "Apricot", "Orange", "Avocado"];
const wordsStartingWithA = arrayofwords(words);
console.log("Words starting with 'a':", wordsStartingWithA);



//12
const fruits: string[] = ["Apple", "Banana", "Orange", "Mango", "Grapes"];


function printSecondToLast(array: any[]): void {

  if (array.length >= 2) {
    const secondToLast = array[array.length - 2];
    console.log("Second-to-last element:", secondToLast);
  } else {
    console.log("Array does not have a second-to-last element.");
  }
}


//13
function squaredNumbers(numbers: number[]): number[] {
  
    const squaredNumbers = numbers.map(number => number ** 2);
    return squaredNumbers;
  }
  
  
  const numberstobesquared = [1, 2, 3, 4, 5];
  const squaredArray = squaredNumbers;
  console.log("Squared array:", squaredArray);
  

//14




//15


