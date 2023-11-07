// const inputobj = document.querySelector("#input1");

// function validation(){

//     if(inputobj.validity.rangeOverflow){
//         inputobj.setCustomValidity("Error: range overflow");
//     }else if(inputobj.validity.rangeUnderflow){
//             inputobj.setCustomValidity("Error: range underflow");
//     }else if(inputobj.validity.valueMissing){
//         inputobj.setCustomValidity("Error: Value missing");
//     }else{
//         inputobj.setCustomValidity("input is a correct");
//     }

//     if(!inputobj.checkValidity()){
//         document.querySelector("#validationMgs").innerHTML = inputobj.validationMessage;
//     }
// }

//sessionStorage.setItem("name", "Jhon Doe");
//console.log(sessionStorage.getItem("name"));

// const calculateSum = document.getElementById("calculateSum");

// let worker;
// calculateSum.addEventListener("click", () => {
//   if (typeof Worker != "undefined") {
//     if (typeof worker == "undefined") {
//       worker = new Worker("./js/worker.js");
//     }
//     worker.onmessage = function (event) {
//       document.getElementById("sum").innerHTML = event.data;
//     };
//   } else {
//     alert("your browser does not support worker");
//   }
// });

// const changeBg = document.querySelector("#changeBg");

// function changeBgColor() {
//   if (document.body.style.background != "green") {
//     document.body.style.background = "green";
//   } else {
//     document.body.style.background = "Purple";
//   }
// }

// changeBg.addEventListener("click", function () {
//   changeBgColor();
// });

// const stopCalculate = document.getElementById("stopCalculate");

// stopCalculate.addEventListener("click", () => {
//   if (typeof Worker !== "undefined") {
//     worker.terminate();
//     worker = undefined;
//   }
// });

//const displayData = document.querySelector("#displayData");

// function fetchData() {
//   fetch("http://127.0.0.1:5500/data.txt")
//     .then((res) => res.text())
//     .then((data) => {
//       displayData.innerText = data;
//     });
// }

// async function fetchData() {
//   const res = await fetch("http://127.0.0.1:5500/data.txt");
//   const data = await res.text();
//   displayData.innerText = data;
// }


// const displayLocation = document.getElementById("displayLocation");

// function getLocation(){
//     if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(showLocation); //gives the current location
//             navigator.geolocation.watchPosition(showLocation);// updated current location
//     }
//     else{
//         displayLocation.innerHTML("Your browser does not support location service!");
//     }
// }


// function showLocation(position){
//     displayLocation.innerHTML =
//     `Latitude: ${position.coords.latitude} <br>
//      Longitude: ${position.coords.longitude} <br>`
// }
