/* scenario: To Become a frontend web developer
 * Steps: Html & Css, Javascript, ForntEnd Framework, Projects
 */

// const determination = true;
// const stage1 = true;
// const stage2 = true;
// const stage3 = true;

// function html() {
//   console.log("Learning Html....");

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (determination) {
//         resolve();
//       } else {
//         reject("You don't have determination.");
//       }
//     }, 2000);
//   });
//   return promise;
// }

// function css() {
//   console.log("Learning Css...");

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (stage1) {
//         resolve();
//       } else {
//         reject("You need to learn html.");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// function javascript() {
//   console.log("Learning Javascript...");

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (stage2) {
//         resolve();
//       } else {
//         reject("you need to learn html & css");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// function framework() {
//   console.log("Learning Framework...");

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (stage3) {
//         resolve();
//       } else {
//         reject("you need to learn javascript");
//       }
//     }, 2000);
//   });
//   return promise;
// }

// function project() {
//   console.log("Doing projects...");

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Congrates, you are a frontend developer now.");
//     }, 2000);
//   });
//   return promise;
// }

// async function Course(){
//     try{
//         await html();
//         await css();
//         await javascript();
//         await framework();
//         console.log(await project());
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// Course(); // asynchronous program running usign async await