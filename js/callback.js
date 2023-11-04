// function display(some) {
//   console.log(some);
// }

// function calc(num1, num2, showResult) {
//   let result = num1 + num2;
//   showResult(result);
// }

// calc(25, 26, display); // displaying result using callback function

// console.log("Line no 1");
// setTimeout(() => {
//   console.log("Line no 2");
// }, 2000); //async
// console.log("Line no 3");
// console.log("Line no 4");

// a mini system of a course lifetime of a student

// const paymentStatus = true;
// const marks = 80;
// function courseEnrollement(callback) {
//   console.log("Payment Status is in progress...");

//   setTimeout(() => {
//     if (paymentStatus) {
//       console.log("Payment is successfull");
//       callback();
//     } else {
//       console.log("Payment is failed!");
//     }
//   }, 2000);
// }

// function courseProgress(callback) {
//   console.log("Course progress going on...");

//   setTimeout(() => {
//     console.log("Course is finished.");
//     callback();
//   }, 3000);
// }

// function getCertificate() {
//   console.log("Creating certificate...");
//   setTimeout(() => {
//     if (marks >= 80) {
//       console.log("Congrates! you've passed the course examination.");
//     } else {
//       console.log("You have failed.");
//     }
//   }, 1000);
// }

// courseEnrollement(() => {
//   return courseProgress(getCertificate);
// });
