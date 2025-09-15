//functions in JavaScript
//Write a function addNumbers that takes two numbers as arguments and returns their sum. Call the function to find sum of any two numbers and display the result.
function addNumbers(a,b){
    return a+b;
}
let sum=addNumbers(5,7);
console.log(sum);
//arrow function
//Write an arrow function square that takes a number and returns its square. Call this function to find square of any number and display the result.
const square=(x)=>x*x;
let squ=square(7);
console.log(squ);
//function Expression
//Write a function expression called randomNumber that returns a random whole number between 1 and 10. Assign this function to a variable and display output of that variable to see random numbers.
const randomNumber = function() {
   return Math.floor(Math.random() * 10) + 1;
};

console.log(randomNumber());
//Write a function stringConcat that takes two string arguments and returns concatenated string. Call this function to concatenate your first and last name into a full name. Display the returned full name.
function stringConcat(firstname,lastName){
    return firstname+" "+lastName;
}
    let name=stringConcat("Sora","Jk");
    console.log(name);
//parameter 
//Write a function greetUser that takes username as input parameter and returns a greeting text for that user. Call the function for at least 3 different users and display their customized greetings.
function greetUser(username){
    return "Hello"+username+"!Welcome";
}
console.log(greetUser("JK"));
console.log(greetUser("V"));
console.log(greetUser("Ram"));
//Write a function that uses a closure to create a counter. The function should return a new function that when invoked increments and returns a counter variable.
function createCounter() {
    let count = 0; // private variable
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
//Write a function outer which returns an anonymous inner function that changes a variable message when called. Call the inner function and display the changed message outside outer.
function outerfunc() {
    let message="HI";
    return function() {
        message="Hello";
        return message;
}
}
const inner=outerfunc();
console.log(inner());
//Write an asynchronous function fakeFetch that accepts a callback. Use setTimeout inside fakeFetch to simulate a 2 second asynchronous operation before calling the callback function.
function fakeFetch(callback) {
  setTimeout(function() {
    let data = 'This is the data';
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fakeFetch(displayData);
//Write both a named and an anonymous function to print your name. Store them in variables and call both functions.
// Named function
function printName() {
  console.log("I'm Sora");
}
const namee=printName;
//Anonymous function
const anonymousFunction = function() {
  console.log("I'm Sora");
};
namee();
anonymousFunction(); 
//Write a program with a function called hoisted and call that function before declaring it to see hoisting in action.
hoisted();
function hoisted(){
console.log("Hello World");
}