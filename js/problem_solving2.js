//#01 find a word from a paragraph. how many times it has used
// and find the first position.

// let paragraph = `At that moment he had a thought that he'd never imagine he'd consider.
// "I could just cheat," he thought, "and that would solve the problem.
// "He tried to move on from the thought but it was persistent.
// It didn't want to go away and, if he was honest with himself, he didn't want it to.`;

// const count = paragraph.match(/he/igm);
// console.log(count); //retunrs an array
// console.log((count ? count.length:0)); //returns the array length

// let position = paragraph.search(/he/i);
// position = position >= 0 ? position : "Not found";
// console.log(position);
// if(position == (-1)){
//     console.log("Not found");
// }
// else{
//     console.log(position);
// }
//console.log(position); //return the index of the match.

//#02 input linearSearch(["a", "b", "c", "d"], "c")
//output = 2  or not found
//implement lenearSearch() function

// function lenearSearch(arr, val){
//     let count = arr.length;
//     for(let i = 0; i < count ; i++){
//         if(arr[i] === val){
//             return i;
//         }
//     }
//     return "not found";
// }
// console.log(lenearSearch(["a", "b", "c", "d"], "c"));

//find the biggest number from an array and show it's index number

// const numbeArray = [1, 2, 5, 6, 9, 8];
// const largestNumber = Math.max.apply(null, numbeArray);
// const largestNumberIndex = numbeArray.indexOf(Math.max.apply(null, numbeArray));
// console.log(largestNumber);
// console.log(largestNumberIndex);

// function lergestNumber(arr) {
//   let lnumber = 0;
//   for (l of arr) {
//     if (l > lnumber) {
//       lnumber = l;
//     }
//   }
//   return [lnumber, arr.indexOf(lnumber)];
// }

// console.log(lergestNumber([1, 2, 5, 9, 8, 10]));

// // #03 find the biggest string from an array and show it's index number

// function longestWord(words) {
//   let lWord = "";
//   for (w of words) {
//     if (w.length > lWord.length) {
//       lWord = w;
//     }
//   }
//   return [lWord, words.indexOf(lWord)];
// }

// console.log(
//   longestWord(["Abdullah", "Sumit Saha", "Akash", "Mizan", "Daiyaan"])
// );

// //#04 find the numbers which are divisible by 3,5 and 3 and 5 both

// function divisible(min, max) {
//   for(let i = min; i <= max; i++){
//     if(i % 15 == 0){
//         console.log(`${i} is JACKPOT`);
//     }
//     else if(i % 5 == 0){
//         console.log(`${i} is JACK`);
//     }
//     else if(i % 3 == 0){
//         console.log(`${i} is POT`);
//     }
//     else{
//         console.log(i);
//     }
//   }
// }

// divisible(20, 50);

//#05 find the falsy array value from an array and delete them

// const someArray = [
//   12,
//   "somethig",
//   false,
//   "some other thing",
//   undefined,
//   "Thanks All",
//   NaN,
//   true,
//   3.14,
//   null,
//   45,
//   "Name",
// ];

// let trueValue = someArray.filter(function (element) {
//   if (element) {
//     return element;
//   }
// });

//console.log(trueValue);

// let trueArray = someArray.filter(Boolean);
// console.log(trueArray);

//#6 find falsy value from an object and delete them.

// someObject = {
//   a: "That's it",
//   b: undefined,
//   c: 3.145,
//   d: null,
//   e: true,
//   f: false,
//   g: "Name",
//   h: "Thanks All",
// };

// function trueObject(obj) {
//   for (let o in obj) {
//     if (!obj[o]) {
//       delete obj[o];
//     }
//   }
//   return obj;
// }

// console.log(trueObject(someObject));
