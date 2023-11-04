// // const numbers = ["n1", "n2", "n3"];
// // console.log(numbers[0]);
// // console.log(numbers[1]);
// // console.log(numbers[2]);
// // numbers[0] = "n10";
// // console.log(numbers[0]);

// // console.log(numbers);

// // const person = ["Akash", "Bina", "98"]; //array elements can be different types of value.
// // console.log(person);
// // console.log(person.length);

// // const devices = ["Computer", "Mobile", "Watch", "Calculator"];
// // console.log(devices.length);
// // console.log(devices[0]); //access the first element.
// // console.log(devices[devices.length - 1]); //access the last element
// // devices[4] = "Mouse";
// // console.log(devices[devices.length - 1]); //access the last element

// // const p = ["p1", "p2", "p3", 'p4', "p5", "p6"];

// // let pLength = p.length

// // let text = "<ul>";
// // for(let i = 0; i< pLength; i++){
// //     console.log(p[i]);
// //     text += `<li> ${p[i]} </li>`;
// // }
// // text += "</ul>";

// // document.getElementById("test").innerHTML = text;

// // function allPerson(value){
// //     text += `<li> ${value} </li>`;
// //     console.log(value);
// // }

// // let text = "<ul>"
// // p.forEach(allPerson);
// // text += "</ul>"
// // document.getElementById("test").innerHTML = text;

// // let fruit = ["Mango", "Banana", "Coconut", "Pineapple", "Apple"];

// // fruit.push("Jackfruit"); //adding a new element in the fruit array.

// // function myFruit(value){
// //     console.log(value);
// // }

// // fruit.forEach(myFruit);

// // document.getElementById("test").innerHTML = fruit;

// // function addNew(){
// //     fruit.push("Orange"); //add a new element in an array
// //     document.getElementById("test").innerHTML = fruit;
// // }

// // document.getElementById("test").innerHTML = fruit;

// // document.getElementById("test1").innerHTML = fruit;
// // function addNew1(){
// //     fruit[fruit.length] = "Lemon"; //add a new element in an array
// //     document.getElementById("test1").innerHTML = fruit;
// // }

// // const cars = ["Mercedes", "Toyota", "BMW", "Mitshubishi"]
// // console.log(cars.toString()); //converts an array to a string
// // console.log(cars.join(" | "));
// /*.join() method the sames job as toString but we can specify the seperator.*/

// // function carsList(value){
// //     console.log(value);
// // }
// // cars.forEach(carsList);

// // console.log(`It has popped: ${cars.pop()}`); //removes the last element of the array.
// // console.log(cars.join());

// // cars.push("Morris Garage");
// // console.log(`It has pushed: ${cars[cars.length - 1]}`);
// // console.log(cars.join());

// // console.log(`It removes first element: ${cars.shift()}`);
// // //remove the first element and lower remainnig elements to lower index.
// // console.log(cars);

// // cars.unshift("Nissan");
// // //It adds new elemenet from the beginnig and upper remainnig elements to upper index.
// // console.log(cars);

// // cars[3] = "Alfa Romeo" //changes an element value
// // console.log(cars);

// // delete cars[3]; //deletes an element from the array. instead of delete we should use pop or shift.
// // console.log(cars);
// // console.log(cars[cars.length]);
// // cars[cars.length] = "Audi";
// // console.log(cars);

// // const things = ["Book", "Pen", "Pencil", "Khata"];
// // console.log(things);
// // things.splice(2, 0 , "Cable", "Clothes"); //adds new elements from any index
// // console.log(things);
// // things.splice(3, 2, "Fan", "Plates", "Cup");
// // //first parameter refers the index to add items, and second parameter refers how many elements need to remove.
// // console.log(things);

// // things.splice(1, 2); // it can remove elements from any index.
// // //first parameter refers the index to start, and second parameter refers how many elements need to remove.
// // console.log(things);

// // const boys = ["Shamim", "Fahad", "Mostofa"];
// // const girls = ["Tabassum", "Sayira", "Muhsina"];

// // const children = boys.concat(girls); //merging two arrays
// // console.log(children); //it does not replace arrays, it creates a new array. base arrays stays same.

// // console.log(boys.concat("Shahdat")); //it can concat strings too.

// // let fruits = ["Orange", "Jackfruit", "Banana", "Apple", "Pineapple"];
// // console.log(fruits);
// // fruits.sort(); //sorts an array ascending order.
// // console.log(fruits);
// // fruits.reverse();
// // console.log(fruits); // sorts an array descending order.

// // let numbers = [25, 15, 40,56,125, 10, 98, 45, 62,258];
// // console.log(numbers);

// // function compare(a, b){
// //     return a - b;
// // }
// // numbers.sort(compare);
// // console.log(numbers); //sorting numbers using comparison function.
// // numbers.sort(function(a, b){return b - a;});
// // //we can write a function seperately or can write a namless function inside sort method.
// // console.log(numbers);

// // let highestNumber = numbers[0];
// // let lowestNumber = numbers[numbers.length - 1];
// // console.log(`Highest Number = ${highestNumber}`);
// // console.log(`Lowest Number = ${lowestNumber}`);

// // console.log(Math.max.apply(null, numbers)); //built in method for highest value
// // console.log(Math.min.apply(null, numbers)); //built in method for lowest value

// let numbers = [15, 39, 60, 9, 25];

// // function myFunction(value,index,array){
// //     console.log(value);
// //     console.log(index);
// //     console.log(array);
// //     console.log("*******")
// // }

// // numbers.forEach(myFunction);

// function myMap(value){
//     return value * 2
// }
// const newMapArray = numbers.map(myMap); //map method
// console.log(newMapArray);

// function myFilter(value){
//     return value % 5 == 0;
// }
// const newFilterArray = numbers.filter(myFilter); // filter mathod
// console.log(newFilterArray);

// function myReduce(total, value){
//     return total + value;
// }
// const newReduce = numbers.reduce(myReduce); // reduce mathod
// console.log(newReduce);

// function myEvery (value){
//     return value % 5 == 0;
// }
// const newEvery = numbers.every(myEvery); // every mathod
// console.log(newEvery);

// function mySome (value){
//     return value % 5 == 0;
// }
// const newSome = numbers.some(mySome); // some mathod
// console.log(newSome);

// function myFind(value){
//     return value > 30;
// }

// const newFind = numbers.find(myFind); //returns the first value if conditon is true.
// console.log(newFind);
