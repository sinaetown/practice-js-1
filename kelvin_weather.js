//Kevlvin is ALWAYS 293
const kelvin = 0;

//Celsius is similar to Kevin, but differs in that Celsius is 273 less than Kelvin
const celsius = kelvin - 273;

//Calculate Fahrenheit by using celsius and its unique equation and then round it using .floor() method
let fahrenheit = Math.floor(celsius*(9/5)+32);

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");

let newton = Math.floor(celsius * (33/100));
console.log(`In fact, in Newton, it is ${newton} Newton`);