//Arrays
//using literals
let a=[];
console.log(a);
let b=[10,20,50,30];
console.log(b);
//using a new Constructor
let a1=new Array(10,56,345,6789);
console.log(a1);
//accesing and first element
console.log(a1[2]);
console.log(b[0]);
//Accesing last element
let last=b[b.length-1];
console.log(b[b.length-1]);
//modifing are element
a1[2]="JavaScript";
console.log(a1);
//adding elements to array
var colors=["Black","Pink","White","Blue","Red"];
colors.push("Brown");
console.log(colors);
colors.unshift("LightPink");
console.log(colors);
//remove elements from an array
let names=["HTML","CSS","JavaScript","Java","Python"];
names.pop();
console.log(names);
let las=names.shift();
console.log(las);
console.log(names.splice(2,1));
//array length
console.log(names.length);
//Increase and decrease the array length
names.length=7;
console.log("length:",names);
names.length=2;
console.log("decrease:",names);
//Concatenation
console.log(names.concat(colors));
//Conversion of array to string
console.log(colors.toString());
//check typeOf array
console.log(typeof(names));
//Recognizing an array
console.log(Array.isArray(names));
console.log(colors instanceof Array);
//Create an array called "fruits" and add 3 fruits to it using the push() method. Then remove the last fruit using the pop() method and display the updated array.
let fruits=["Apple","Banana","Orange"];
fruits.push("strawberry","Lemon","Grapes");
console.log(fruits);
fruits.pop();
console.log(fruits);
//Create an array called "vegetables" with 5 items. Remove the first item using shift() and add a new item to the beginning using unshift(). Display the updated array.
var vegetables=["Carrot","Radish","Beans","Beetroot","Brinjal"];
vegetables.shift();
console.log(vegetables);
vegetables.unshift("Chilly");
console.log(vegetables);
//Create an array called "nums" with numbers 1-5. Using a loop, remove all existing items and add numbers 6-10 using the push() method. Display the final array.
let nums=[1,2,3,4,5];
nums.length=0;
console.log(nums);
for(let i=6;i<=10;i++){
nums.push(i);
}
console.log(nums);
//Create an array called "strings" with 5 string values. Using push() and unshift(), add 2 items to beginning and end. Using pop() and shift(), remove 2 items from beginning and end. Display array after each operation.
let strings=["C","C++","C#","Java","python"];
strings.push("Hml","css");
console.log(strings);
strings.unshift("Node.js","React Js");
console.log(strings);
strings.pop();
strings.pop();
console.log(strings);
strings.shift();
strings.shift();
console.log(strings);
//Create an array of 5 student names. Take a new input student name from the user and add it to the existing array using concat(). Display the final array.
const readline=require("readline-sync");
let name=["Jack","JK","V","Sora","RM"];
let studentnames=readline.question("Enter a new student name :");
name=name.concat(studentnames);
console.log(name);
//Create an array of length 10 with random numbers between 1-100. Take a slice of this array to select only last 5 elements. Display the sliced array.
let array=[1,45,34,67,23,8,23,89,32,99];
let nn=array.slice(-5);
console.log(nn);
//Create an array of 6 fruits with "apple" as one of them. Use indexOf() to find position of "apple". Display the index or display "apple not found".
let arrfruit=["apple","Banana","Orange","Lemon","Grapes","Blackberry"];
let fru=arrfruit.indexOf("apple");
console.log(fru);
if(arrfruit!=-1){
    console.log(`apple found : ${fru}`);
}else{
   console.log("apple not found");
}
//Create an array of even numbers from 2 to 20. Using filter(), create new array with only numbers greater than 10. Display filtered array.
let even=[];
for(let i=2;i<=20;i+=2){
       even.push(i);
    }
    console.log(even);

    let evennumber=even.filter(num=>num>10);
    console.log(evennumber);
    //Create an array to store 5 random country names. Sort the array in ascending alphabetical order using sort() method. Display final array.
    let countrynames=["India","Brazil", "Canada", "Australia", "Germany"];
    console.log(countrynames);
    countrynames.sort();
    console.log(countrynames);
    countrynames.reverse();
    console.log(countrynames);