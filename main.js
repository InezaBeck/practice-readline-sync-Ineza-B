const input = require('readline-sync');

let name = input.question("What is your name? ");
console.log("Hello, " + name + "! Welcome to the JavaScript quiz by Ineza!");

let answer1 = input.question("1. What data type is the value true? ");
let answer2 = input.question("2. What keyword makes a variable that cannot change? ");
let answer3 = input.question("3. What does typeof 42 give you? ");
let answer4 = Number(input.question("4. What is 10 % 3? "));
let answer5 = input.question("5. Is null a primitive or complex data type? ");

console.log("Here are your answers, " + name + ":");
console.log("1. " + answer1);
console.log("2. " + answer2);
console.log("3. " + answer3);
console.log("4. " + answer4);
console.log("5. " + answer5);