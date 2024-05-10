//Q#1
console.log("Hello, World");

//Q#02
let temperature = 18;
if (temperature < 20) {
  console.log(`The temperature is ${temperature}°C`);
  console.log("It's Cold");
}

//Q#03
let apples = 10;
let remaining_apples = apples - 3;
console.log(`Number Of Apples Left Are ${remaining_apples}`);

//Q#04
let firstName = "Asad";
let lastName = " Abid";
let fullName = firstName + lastName;
console.log(fullName);

//Q#05
let compared_number = 6;
if (compared_number > 3) {
  console.log("Yes, Number Is Greater");
} else {
  console.log("No, Number Is Not Greater");
}

//Q#06
function area_function(radius: number) {
  let circleArea = 3.14 * radius * radius;
  console.log(circleArea);
}
area_function(3.5);

//Q#07
for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Q#08
let temp = [24, 27, 29, 30, 50, 30];
let temp_variable = 0;
for (let i = 0; i < temp.length; i++) {
  if (temp[i] > temp_variable) {
    temp_variable = temp[i];
  }
}
console.log(`The Highest Temperature From The Following Is ${temp_variable}°C`);

//Q#09
console.log("Please Write Your Age:");
let age_prompt = 17;
console.log(`Your Written Age Is ${age_prompt}, You Are A Minor`);

//Q#10
let positive_count = 0;
let number_array = [2, -5, 18, 19, -56, 20, -78];
for (let i = 0; i < number_array.length; i++) {
  if (number_array[i] > 0) {
    positive_count++;
  }
}
console.log(`The Total Positive Integers Are ${positive_count}`);

//11 filter elements starting with a
let array_filter = ["apple", "Apricot", "Almonds", "Banana"];
console.log(`Before Filter ${array_filter}`);
function filter_array(arr: string[]) {
  console.log(arr.filter((element) => element.toLowerCase().startsWith("a")));
}
filter_array(array_filter);

//12 log second to last element
let fruits = ["mango", "apple", "pear", "grapes", "lychee"];
console.log(`Before Log ${fruits}`);
function element_log(arr: string[]) {
  console.log(arr[arr.length - 2]);
}
element_log(fruits);

//13 array number squared
let square_num = [1, 2, 3, 4, 5, 6, 7];
function array_square(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
}
array_square(square_num);

//14 reverse array without using reverse function
let reverse_array = [1, 2, 3, 4, 5, 6, 7];
function reversed_array() {
  let temp;
  for (let i = 0; i < reverse_array.length / 2; i++) {
    const j = reverse_array.length - 1 - i;
    temp = reverse_array[i];
    reverse_array[i] = reverse_array[j];
    reverse_array[j] = temp;
  }
  console.log(reverse_array);
}
reversed_array();

//15 minimum and maximum scores in array
let match_score = [5, 7, 9, 10, 15, 18, 15, 16, 13, 18];
let max_count = 0;
let min_count = 0;
function max_minScore() {
  for (let i = 0; i < match_score.length; i++) {
    if (match_score[i] > 15) {
      max_count++;
    } else if (match_score[i] < 9) {
      min_count++;
    }
  }
  console.log(
    `Times score fell below is ${min_count}, and number of times score was high was ${max_count}`
  );
}
max_minScore();

//filter array 16
let filter_array1 = [null, 0, "", "apple", undefined, NaN, 25];
function array_cleaner(filter_array1: any[]) {
  console.log(
    filter_array1.filter(
      (Element) => Element !== null && Element !== undefined && Element !== ""
    )
  );
}
array_cleaner(filter_array1);
console.log(filter_array1);

//Concatenation 17
let num1_array = [1, 2, 3];
let num2_array = [4, 5, 6];
let combined_array = num1_array.concat(num2_array);
console.log(combined_array);

//sum of elements either even or odd use function 18
let number_array1 = [2, 4, 25, 67, 40, 77, 87];
function sumOFelements(array_number: number[]) {
  let odd_sum = 0;
  let even_sum = 0;
  for (let i = 0; i < array_number.length; i++) {
    if (array_number[i] % 2 === 0) {
      even_sum += array_number[i];
    } else {
      odd_sum += array_number[i];
    }
  }
  console.log(`Sum Of Even Digits Are ${even_sum}`);
  console.log(`Sum Of Odd Digits Are ${odd_sum}`);
}
sumOFelements(number_array1);

//elements exist in array or not 19
let array_check = [24, 29, 37, 48, 58];
function check_array(array_number: number) {
  let value_present = false;
  for (let i = 0; i < array_check.length; i++) {
    if (array_check[i] === array_number) {
      console.log(`Value Exists At Index ${i} `);
      value_present = true;
    }
  }
  if (!value_present) {
    console.log("-1");
  }
}
check_array(29);

//smallest number in an array 20
let sample_array = [2, 6, 8, 1, 9];
function smallest_number() {
  let temp_variable1 = sample_array[0];
  for (let i = 0; i < sample_array.length; i++) {
    if (sample_array[i] < temp_variable1) {
      temp_variable1 = sample_array[i];
    }
  }
  console.log(`The Smallest Number Is ${temp_variable1}`);
}
smallest_number();

//array elements product 21
let product_array = [3, 4, 4, 7, 6];
function array_product() {
  let total_product = 1;
  for (let i = 0; i < product_array.length; i++) {
    total_product *= product_array[i];
  }
  console.log(`Total Product Of All Elements In Array Is ${total_product}`);
}
array_product();

//22 filter by length
function array_filter1(filter_array1: string[], n: number) {
  console.log(filter_array1.filter((str) => str.length > n));
}
let array_products = ["cider", "vinegar", "Juice", "Pomegranate"];
array_filter1(array_products, 5);

//23 array duplicates function
let duplicate_array = [1, 2, 1, 2, 5, 3, 7, 4, 7, 3];
function check_duplicate() {
  let duplicate_count = 0;
  for (let i = 0; i < duplicate_array.length; i++) {
    for (let j = i + 1; j < duplicate_array.length; j++) {
      if (duplicate_array[i] === duplicate_array[j]) {
        console.log(`Duplicate Found Is ${duplicate_array[i]}`);
        duplicate_count++;
      }
    }
  }
  console.log(`Total Number Of Duplicates Are ${duplicate_count}`);
}
check_duplicate();

//increment each element of array 24
let increment_array = [1, 2, 3, 4, 5, 6];
console.log(`Array Before Increment Is ${increment_array}`);
function IncrementAll() {
  for (let i = 0; i < increment_array.length; i++) {
    increment_array[i]++;
  }
  console.log(`Array After Increment Is ${increment_array}`);
}
IncrementAll();

//count occurrence in array 25
let count_array = [1, 1, 1, 5, 2, 6, 6];
function countOccurrence(elementNum: number) {
  let digit_count = 0;
  for (let i = 0; i < count_array.length; i++) {
    if (count_array[i] === elementNum) {
      digit_count++;
    }
  }
  console.log(`The Digit ${elementNum} has appeared ${digit_count} times`);
}
countOccurrence(1);

//26 check if array sorted in ascending order
let array_1 = [1, 2, 2, 3, 5, 8];
function array_sort() {
  let ascending_array = true;
  for (let i = 0; i < array_1.length - 1; i++) {
    if (array_1[i] > array_1[i + 1]) {
      ascending_array = false;
      break;
    }
  }
  if (ascending_array) {
    console.log(`The Given Array Is Ascending In Order`);
  } else {
    console.log(`Given Array Is Not Ascending`);
  }
}
array_sort();

//27 separate last two index by 'and' and rest by ','
let names_array = ["lamborghini", "porsche", "gt3", "Turismo"];
function array_formatter(arr: string[]) {
  if (arr.length === 0) {
    console.log(" ");
  } else if (arr.length === 1) {
    console.log(arr);
  } else {
    let format_names = arr.slice(0, arr.length - 2).join(", ");
    let join_and = arr.slice(-2).join(" and ");
    console.log(`${format_names}, ${join_and}`);
  }
}
array_formatter(names_array);

//Fahrenheit Array To Celsius 28
let Fahrenheit_array = [94, 97, 98, 99, 102];
function convert_temperature() {
  for (let i = 0; i < Fahrenheit_array.length; i++) {
    Fahrenheit_array[i] = ((Fahrenheit_array[i] - 32) * 5) / 9;
  }
  console.log(Fahrenheit_array);
}
convert_temperature();

//29 find min, avg, and max
let number_array2 = [2, 3, 4, 5, 6, 7];
function object_maker() {
  let array_sum = 0;
  let minimum = number_array2[0];
  let average;
  let maximum = 0;
  for (let i = 0; i < number_array2.length; i++) {
    if (number_array2[i] < minimum) {
      minimum = number_array2[i];
    }
    if (number_array2[i] > maximum) {
      maximum = number_array2[i];
    }
    array_sum += number_array2[i];
  }
  average = array_sum / number_array2.length;
  let object_number = {
    min: minimum,
    max: maximum,
    average: average,
  };
  console.log(object_number);
}
object_maker();

//30 swap indexes
let cars_array = ["suzuki", "corolla", "proton", "kia soul"];
function value_swapper(arr: string[], index1: number, index2: number) {
  if (
    index1 >= arr.length ||
    index2 >= arr.length ||
    index1 < 0 ||
    index2 < 0
  ) {
    console.log("Invalid Array Index");
  } else {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    console.log(arr);
  }
}
value_swapper(cars_array, 2, 0);

//31 match letter with array and console count
function countCharacterOccurrences(arr: string[], character: string) {
  let count = 0;
  for (const str of arr) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === character) {
        count++;
      }
    }
  }
  console.log(`The Given Character ${character} has repeated ${count} times`);
}
countCharacterOccurrences(cars_array, "s");

const tasks = [
  { task: "cleaning", complete: true },
  { task: "homework", complete: false },
  { task: "gardening", complete: false },
];
for (const item of tasks) {
  if (!item.complete) {
    console.log(item.task);
  }
}

//33 array sort from smallest to largest
let integer_array = [-1, 2, 1, 6, 5, 8];
function sort_array(arr: number[]) {
  arr.sort((a, b) => a - b);
  console.log(arr);
}
sort_array(integer_array);

//34 logs TypeScript elements in reverse without using reverse
let array_vegetables = ["spinach", "broccoli", "cucumber", "IceBerg"];
function reverse_order(arr: string[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
reverse_order(array_vegetables);

//35 simple calculator
function simple_calc(number1: number, number2: number, operator: string) {
  console.log("The Result Of Requested Operation Is:");
  switch (operator) {
    case "+":
      console.log(number1 + number2);
      break;
    case "-":
      console.log(number1 - number2);
      break;
    case "/":
      console.log(number1 / number2);
      break;
    case "*":
      console.log(number1 * number2);
      break;
    default:
      console.log("Invalid Operator");
  }
}
simple_calc(29, 50, "+");
