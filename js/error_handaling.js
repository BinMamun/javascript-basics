// try {
//   a("do it");
//   throw `This is an error.`;
//   a("do it");
// } catch (err) {
//   console.log(err.message);
//   document.getElementById("demo").innerHTML = err.message;
// }

// let x = "11";
// try{
//     if(x == "") throw "empty";
//     else if(isNaN(x)) throw "Not a number";
//     x = Number(x);
//     if(x < 5) throw "Too low";
//     else if(x > 10) throw {
//         message: "The value is too high.",
//         name: "High"
//     };
// }
// catch(err){
//     console.log(`${err.name}: ${err.message}`);
// }
// finally{
//     console.log("The code is executed.");
// }
