// const car = {
//     name: "Fiat",
//     weight: "850Kg",
//     model: "F345",
//     color: "White",
//     start: function(){
//         console.log("It has Push start feature.");
//     },
//     drive: function(){
//         console.log("Automatic Gear");
//     },
//     break: function(){
//         return "Abs braking system.";
//     },
//     stop: function(){
//         return "Push stop button.";
//     }
// }

// console.log("The name of the car is " + car.name);
// console.log("It has " + car["weight"]+ " of weight.");
// console.log("Color is " + car["color"] + ".");
// console.log("Model name " + car.model + ".");
// car.start();
// car.drive();
// console.log(car.break());
// console.log(car.stop());

// const person ={
//     name: "Sayan Ahmed",
//     age: 2,
//     fatherName: "Mamun Ahmed",
//     motherName: "Sonia Ahmed",
//     personInfo: function(){
//         return "My name is " + this.name + "." +
//         "I am " + this.age + " years old."+
//         "My father's name is " + this.fatherName +
//         " and my mother's name is " + this.motherName+"."
//     }
// }

//console.log(person.personInfo());

// const mouse = {
//     name: "Micky"
// }

// const animal = {
//     Category: "Mouse",
//     animalName: mouse,
// }

// console.log(animal.animalName.name);

// const country = {
//   name: "Bangladesh",
//   age: 50,
// };

// country.population = "180 million"; //object pops can be added anytime.
// console.log(country);

// country.age = 51;
// console.log(country); // object prop value can be changed anytime

// for (let c in country) {  
// console.log(`${c}: ${country[c]}`);
// }


// delete country.population; // object prop value can be deleted using delete keyword
// console.log(country); 

// const person = {
//     name: "Jhon",
//     age: 25,
//     cars:{
//         car1: "Mercedes",
//         car2: "BMW",
//         car3: "Honda"
//     }
// };

// let jhonCar = person.cars.car1; //nested object property can be accessed 
// console.log(jhonCar); 

// const somePerson = {
//     name: "Jhon",
//     age: 33,
//     cars: [
//         {car1: "Ford", model: [2014, 2020, 2022]},
//         {car2: "Mercedes", model: [2016,2017,2019]}
//     ]
// };

// for(let sp in somePerson){
//     console.log(`${sp}: ${somePerson[sp]}`);
// }

// for(let p in somePerson.cars){
//     //console.log(somePerson.cars[p]);  
//     for(let c in somePerson.cars[p]){
//         console.log(`${c}: ${somePerson.cars[p][c]}`);
//     }    
// }


// const employee = {
//     id: 1254,
//     name: "Shahed",
//     mobile: "0123456",
//     address: "Dhaka",
//     fullInfo: function(){
//        return `Id: ${this.id}, Name: ${this.name}, Mobile: ${this.mobile}, Address: ${this.address}`
//     }
// };

// console.log(employee.fullInfo()); //displays in console

// document.getElementById("objectDisplay").innerHTML = employee.fullInfo(); //displays in html


// //displaying data in html using for in loop

// const course = {
//     name: "Javascript for beginners",
//     videos: 131,
//     duration: "1 Month" 
// };

// let text  = "<ul>";
// for(let c in course){    
//     //console.log(employee[e]);
//     text += `<li>${c}: &ensp; ${course[c]}</li>`        
// }
// text += "</ul>";
// document.getElementById('objectDisplay').innerHTML = text;

// //displaying data in html using for of loop

// const courseArray = Object.values(course); //we can find object data in Object.values function

// let text1 = "";
// for(let c in courseArray){
//     text1 += ` ${courseArray[c]} `;
// }
// document.getElementById("objectDisplay1").innerHTML = text1;

// // displaying obejct data using JSON.stringify method

// const courseString = JSON.stringify(course);
// console.log(courseString);
// document.getElementById('objectDisplay2').innerHTML = courseString;


// //setter and getter in object

// const ageCalculator ={
//     today: new Date(),
//     userDob : '',
//     set age(Date){
//         this.userDob = Date;
//     },
//     get currentAge(){
//         return this.today - this.userDob;
//     }
// };


// ageCalculator.age = new Date("2023-03-25");
// console.log(ageCalculator.currentAge);


// // constructor function


// function Company(name, location, type){
//     this.name = name,
//     this.location = location,
//     this.type = type,
//     this.fullInfo = function(){
//         return `${this.name}, ${this.location}, ${this.type}.`;
//     }
// } 

// const magicHand = new Company("Magic Hands", "ঢাকা, বাংলাদেশ", "Engineering");
// const arafah = new Company("আরাফাহ্ টেলিকম", "মিরপুর, ঢাকা-১২১৬, বাংলাদেশ", "মোবাইল এক্সেসরিজ এন্ড কসমেটিক্স");
// console.log(magicHand);
// console.log(arafah);


//object iterable

// const numbers = {
//     one: 1,
//     two: 2,
//     three: 3
// };

// console.dir(numbers); //not iterable
// const numbs = Object.values(numbers); //iterable  *
// // *note: Object.values function converts and object to array
// console.dir(numbs);


