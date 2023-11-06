// // instance of self invoking function

// (function () {
//   console.log("This is self invoking function 1"); //IIFE
// })();

// (() => console.log("This is self invoking function 2"))(); //IIFE

// //function can be used as values
// function multiply(a, b) {
//   return a * b;
// }

// let x = multiply(4, 5);
// console.log(x);

// const arrowFunction = (x) => {
//   return Math.PI * x * x;
// };
// console.log(arrowFunction(5).toFixed(2));

// function fullName(city, country) {
//   console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
// }

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
// };

// fullName.call(person, "Ohio", "US"); //call method

// //function closures

// const add = (function(){
//     let counter = 0;
//     return function() {counter++; return counter;}
// })();

// console.dir(add);
// console.log(add());
// console.log(add());
// console.log(add());
