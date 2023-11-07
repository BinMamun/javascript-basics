
// //#01 Print 1 to 6 (1 and 6 include) randomly for ludo.
// function ludoRand(max, min){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(ludoRand(6,1));
// let ludo = Math.floor(Math.random() * (7-1) + 1);
// console.log(ludo);

// //#02 sort all students name alphabetically

// const allStudents = ["Shayan", "Marietta","Baghdasar", "Coral", "Emilia", "Kristapor", "Sanjib", "Dinesh", "Berjouhi"];
// console.log(allStudents);
// console.log(allStudents.sort());


// //#03 sort all students roll number ascending to descending

// const allRolls = [9,8,5,1,3,4,2,6];
// console.log(allRolls);

// function ascToDesc(a,b){
//     return a - b;
// }
// function descToAsc(a,b){
//     return b - a;
// }
// console.log(allRolls.sort(ascToDesc));
// console.log(allRolls.sort(descToAsc));

// console.log(allRolls.sort(function(a, b){
//     return a - b;
// }));

// //#04 check the given year is a leap year or not.


// function isLeapyear(year){
//    if( year % 4 === 0 && year % 100 !=0)
//    {
//     console.log(`${year} is a leap year!`);
//    }
//    else{
//     console.log(`${year} is not a leap year!`);
//    }
// }
// isLeapyear(1974);

// //#05 check how many vowels are in the sentence.

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function vowelCount(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);
//     console.log(letters);
//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }

// console.log(vowelCount("Hello, This is Abdullah"));


// //#06 find duplicate numbers from an array.

// const numberArray =  [1, 1, 4, 5, 7, 3, 5, 5, 6, 9, 1, 7, 2, 3];

// const duplicate = numberArray.filter(function(value, index, array){
//     return array.indexOf(value) === index && array.lastIndexOf(value) !== index;
// });
// console.log(duplicate);

// //#07 find unique numbers from an array.

// const numArray = [1, 1, 2, 3, 3, 4, 5, 5, 5];

// const unique = numArray.filter(function(value, index,array){
//     return array.indexOf(value) === index;
// });
// console.log(unique);
