// // let x = 10;
// // let y = 20;
// // let z = 'The result is: '+ x + y;
// // console.log(z); //output will show "The result is: 1020" 
// // //javascript alwasy reads from left to right.
// // z =  x + y +" sum result."; 
// // console.log(z); //output will show "The result is: 30"
// // z = "The result is: " + (x+y); 
// // console.log(z); //output will show "The result is: 30"

// // z = `${x} + ${y} = ${x + y}`; //output will show "The result is: 30"
// // console.log(z); //output will show "10 + 20 = 30"

// // x = "500";
// // y = "50";
// // z = x / y;
// // console.log(z); // z will be 10

// // x = "10";
// // y = 10;
// // z = x * y;
// // console.log(z); //z will be 100

// // x = "text";
// // y = 10;
// // z = x * y;
// // console.log(z); // z will be NaN(Not a Number)


// // let myNumber = 2 ;
// // while(myNumber != Infinity){
// //     myNumber = myNumber * myNumber;
// //     console.log(myNumber);    
// // }


// let x = 123;
// console.log(x); //this one is number
// console.log(x.toString()); // this one is string

// x = 9.59;
// console.log(x.toFixed(0)); //returns 10
// x = 9.5689;
// console.log(x.toFixed(2)); //two decimal points after the decimal point
// console.log(x.toFixed(5)) // 5 decimal points after the decimal point

// x = 9.659;
// console.log(x.toPrecision()); //no change
// console.log(x.toPrecision(2)); // keeps total 2 numbers
// console.log(x.toPrecision(6)); // makes it total 6 digits

// let n1 = true;
// let n2 = false;
// console.log(Number(n1)); //converts to number
// console.log(Number(n2)); //converts to number
// let x1 = "10";
// console.log(Number(x1)); //returns number
// x1 = "10,123";
// console.log(Number(x1)); // unable to convert to number.
// x1 = "Jhon";
// console.log(Number(x1)); // unable to convert to number. retunrs NaN

// let p1 = 10.56;
// console.log(parseInt(p1)); // converts to integer value
// p1 = "10.25";
// console.log(parseInt(p1)); // converts to integer value
// p1 = "Bashumati";
// console.log(parseInt(p1)); // unable to convert to number. retunrs NaN

// console.log(parseFloat(p1)); // unable to convert to number. retunrs NaN
// p1 = 5984.156;
// console.log(parseFloat(p1)); // returns floating number.
// p1 = "12.12";
// console.log(parseFloat(p1)); // returns floating number.

// p1 = "10 years";
// console.log(parseFloat(p1)); // always retunrs first value.


// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
