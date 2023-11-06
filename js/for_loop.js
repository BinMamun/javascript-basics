// for(let i = 0; i < 10; i++){
//     console.log(`This is ${i}`);
// };// for loop

// let i = 0;
// for(; i < 10; i++){
//     console.log(`Agina ${i}`);
// }; // Statement 1 is optional

// for(let i = 1; ; i++){
//     if(i < 10){
//         console.log(`loop without 2nd statement ${i}`);
//     }
//     else{
//         break;
//     }
// }; 

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }//


// //for in 


// const person={fName: "Jhon", lName: "Doe", age: 32};

// for( let p in person){
//     console.log(p); //retunrs only property names
// }

// for( let p in person){
//     console.log(`${p}: ${person[p]}`); //we can get property value using object property name.
// }


// const numbers = [12, 15, 65, 78, 2, 9, 85];

// for(let n in numbers){
//     console.log(numbers[n]); //returns the index of an array
// }  //for in can got though arrays.

// //for of

// console.log("for of")
// const rolls = [98, 52, 78,65,45,12];
// for(let r of rolls){
//     console.log(r); //returns the values
// };