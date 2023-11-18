let number = 2.8;

if(number <=  2.8){
    console.log(Math.floor(number));
}else{
    console.log(Math.ceil(number));
}

let num = 2.8;
if(num >= 2.2){
    console.log(Math.ceil(number));
}else{
    console.log(Math.floor(number));
}


function toFahrenheit(c){
    let fahrenheit = c * (9/5) + 32
    return fahrenheit;
}

console.log("Fahrenheit: " + toFahrenheit(-5));

function toCelcius(f){
    let celcius = (f - 32) * (5 / 9);
    return celcius;
}
console.log("Celcius: " + toCelcius(77));

