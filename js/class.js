// // class Person {
// //   constructor(name, age) {
// //     (this.name = name), (this.age = age);
// //   }

// //   info() {
// //     return `NAME:\t${this.name}\nAGE:\t${this.age}`;
// //   }
// // }

// // const p1 = new Person("Akash", 31);
// // const p2 = new Person("Shihab", 29);
// // console.log(p1);
// // console.log(p2);
// // console.log(p1.name);
// // console.log(p1.age);

// // console.log(p1.info());
// // console.log(p2.info());

// // class Car {
// //   constructor(name, year) {
// //     (this.name = name), (this.year = year);
// //   }

// //   carAge() {
// //     let age = new Date().getFullYear() - this.year;
// //     return age;
// //   }
// // }

// // const car1 = new Car("Toyota", 2000);
// // console.log(`Car Name:\t${car1.name}\nAge:\t\t${car1.carAge()}`);

// // const car2 = new Car("Mazda", 2020);
// // console.log(`Car Name:\t${car2.name}\nAge:\t\t${car2.carAge()}`);


// class Person {
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }

//     fullName(){
//         return `Name ${this.name}, Age ${this.age}`;
//     }
// }

// class Employee extends Person{
//     constructor(name, age, empId){
//         super(name, age);
//         this.employeeId = empId
//     }

//     fullInfo(){
//         console.log(`Id: ${this.employeeId}, ${this.fullName()}`);
//     }
// }  

// const rakib = new Employee("Rakib Hasan", 29, 2497);
// rakib.fullInfo();
