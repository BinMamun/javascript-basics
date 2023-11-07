// const student = {
//   id: 1212,
//   sName: "Sahab Uddin",
//   roll: 21,
//   class: 7,
//   fullInfo: function () {
//     return ` ID: \t${this.id}\n NAME: \t${this.sName}\n ROLL:\t${this.roll}\n CLASS:\t${this.class}`;
//   },
// };

// console.log(student.fullInfo());

// const person = {
//   pname: "",
//   address: "",
//   mobileNo: 0,
//   info: function (name, add, mob) {
//     this.pname = name;
//     this.address = add;
//     this.mobileNo = mob;
//     return ` Name:\t\t${this.pname}\n Mobile:\t${this.mobileNo}\n Address:\t${this.address}`;
//   },
// };

// console.log(person.info("ABdullah", "Dhaka", "01234567789"));

function showMessage() {
  setTimeout(()=>{
    document.getElementById("magic").innerHTML = "&#9733;TADA&#9733;";
  }, 2000);
}

// const company = {
//   cName: "Magic Hands",
//   address: "New York",
//   empQuantity: 500,
// };

// const companyInfo = {
//   info: function () {
//     return `Name:\t${this.cName}\nEmployee Count:\t${this.empQuantity}\nLocation:\t${this.address}`;
//   },
// };

// let print = companyInfo.info.call(company); //call method. it can be used to create access modification of properties of an object.
// console.log(print);
// console.log(
//   "Call method can be used to create access modification of properties of an object."
// );

// ------------Arrow Function----------------
//it's like "goes to" in C#

// hello = () => "Hello World!"; //arrow fucntion
// console.log(hello());

// myFunc = (val) => 25 + val; // arrow function with a perameter

// console.log(myFunc(24));

// myFunc1 = (val) => 36 + val; //it can be written like this
// console.log(myFunc1(26));

// const a = [];
// a[2] = "a";
// console.log(a[0]);



