// let text = "ABDULLAH BIN MAMUN";
// console.log(text);
// console.log (text.length);

// let dialogue = "They said, \"We are Vikings.\" Aperenty I did not believe."
// console.log(dialogue);

// dialogue = "Ten \\ five is two";
// console.log(dialogue);

// dialogue = "Testing some sting escape \t sequences"; //\t can be used to input a tab
// console.log(dialogue);
// dialogue = "Testing some sting\nescape sequences"; // \n can be used to create new line.
// console.log(dialogue);
// dialogue = "Testing some sting \
// escape sequences"; 
// /*
// * \ can be used to write in a new line while coding.
// * this backslash can only be used while writing strings
// */ 
// console.log(dialogue);

// let x = "Jhon"; //this is primitive type string. type of = sting.
// let y = new String("Jhon"); // type of = object

// if(x==y){
//     console.log("x and y is equal");
// }
// else{
//     console.log("x and y is not equal");
// }

// console.log(x==y); //this is true in javascript. because both values are same.
// console.log(x===y); // this is false because both types are not same.

// /* == checks if the both values are same or not.
// * === check if the both value and type are same or not.
// * obejct can not be compared with == or ===
// */

// let text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content";
// console.log(text);
// console.log(text.length); //prop
// console.log(text.slice(3, 17)); //slice method
// console.log(text.substring(14, 17)); //substring method
// //document.write(text.substring(25, 40));

// console.log(text.slice(34));
// let s = text.substr(3,15); //substr method
// console.log(s);

// text = "Please visit Microsoft.";
// console.log(text);
// console.log(text.replace("Microsoft", "Google")); 
// //replace method does not changes the original string, it returns a new string.

// let someText = "YoU have done SOMETHING very GOOD";
// console.log(someText.toLowerCase());
// console.log(someText.toUpperCase());

// function upperCase(){    
//     document.getElementById("demo2").innerHTML = text.toUpperCase();
// }

// function lowerCase(){
//     document.getElementById("demo3").innerHTML = text.toLowerCase();
// }

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// document.getElementById("demo4").innerHTML = text3; //concat method

// let item1 = "Maggy Noddles";
// let item2 = "25";
// let item3 = "Energy Biscuit";
// document.getElementById("demo5").innerHTML = item1;
// document.getElementById("demo6").innerHTML = item2.padStart(4, 0);
// document.getElementById("demo7").innerHTML = item3;

// let fullName = "A b d u l l a h";
// console.log(fullName.split(" ")[0].replace("A", "C")); 
// //Split method turns a string to an array; we can print and work like array.
// ;
// console.log(fullName.split(""));

// let companyInfo = 
//     "It is a long established fact "+ 
//     "that a reader will be distracted "+
//     "by the readable content";
// console.log(companyInfo.indexOf("fact")); 
// console.log(companyInfo.indexOf("something")); 
// //finds the index of the first letter of the word.
// //if it does not find the word it will return -1 value.
// console.log(companyInfo.lastIndexOf("a")); //finds the last index of the word.
// console.log(companyInfo.search("reader"));
// let text = "The rain in the SPAIN stays mainly at the plain.";
// console.log(text.match(/ain/g));

// console.log(text.includes("rain")); //returns true
//  //returns true if the word is found else returns false
// console.log(text.includes("rain", 12)); //returns false
//  //it can take 2 parameter.

