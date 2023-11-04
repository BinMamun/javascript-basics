// function validateForm() {
//   const name = document.forms["myform"]["fname"].value;
//   const age = document.forms["myform"]["age"].value;
//   if (name == "" || age == "") {
//     document.getElementById("validation").innerHTML =
//       "input value can not be empty";
//     return false;
//   } else if (isNaN(age)) {
//     document.getElementById("validation").innerHTML =
//       "Age value need to be a number";
//     return false;
//   }
// }

// function changeStyle() {
//   const p = document.querySelector("#cngStyle");
//   p.style.color = "Green";
//   p.style.fontSize = "20px";
//   p.style.fontWeight = "bold";
// }

// function ballRolling() {
//   const ball1 = document.getElementById("ball1");
//   const ball2 = document.getElementById("ball2");

//   let inteval1 = setInterval(running1, 6);
//   let interval2 = setInterval(running2, 6);
//   let pos1 = 0;
//   function running1() {
//     pos1++;
//     if (pos1 < 350) {
//       ball1.style.top = pos1 + "px";
//       ball1.style.left = pos1 + "px";
//     } else {
//       clearInterval(inteval1);
//     }
//   }

//   let pos2 = 350;
//   function running2() {
//     pos2--;
//     if (pos2 != 0) {
//       ball2.style.left = pos2 + "px";
//       ball2.style.top = pos2 + "px";
//     } else {
//       clearInterval(interval2);
//     }
//   }
// }

// function upperCase() {
//   const val = document.getElementById("nameInput");
//   val.value = val.value.toUpperCase();
// }
