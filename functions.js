//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function sorting (arr){
  const sortedArray = arr.sort();
    // console.log({sortedArray});
    
    const reversedStrings = arr.map(arr => [...arr].reverse().join(''));
    console.log({reversedStrings})
    // console.log(words.reverse());

}
sorting(['Hello','World','John','Doe']);


//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
 
function checkElements(array,index) {
  const element = array[index];

       if (element > 0) {
        return element + ' is positive';
       } else if (element < 0) {
        return element + ' is negative';
       } else {
        return element + ' is zero';
       }
  }
  
  const elements = [20, -1, 3, 0];
  console.log(checkElements(elements, 1));

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortBySalary(employees){
  return employees.sort((a,b) => a.salary - b.salary);
}
let employees = [
     {id: 1, name:"Amanda", salary: 100000},
     {id: 2, name:'Ireri', salary: 80000},
     {id: 3, name:'Sue', salary: 90000 }
 ];

const sortedEmployees = sortBySalary(employees);
console.log(sortedEmployees);

 //Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
 function MultiplyNumbers(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   const numbersArray = [1, 2, 3, 4, 5];
   MultiplyNumbers(numbersArray);


//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function transformArray(numbers) {
  const firstFour = numbers.slice(0,4).map(item => item * 8);
  const lastTwo = numbers.slice(-2).map(item => item + 5);
  const newArray = firstFour.concat(lastTwo)
  console.log(newArray)
   }

transformArray([1, 3, 4, 5, 2, 10]);

