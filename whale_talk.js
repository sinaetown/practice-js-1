let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === "u" || input[i] === "e") {
        resultArray.push(input[i]);
      }
      resultArray.push(input[i]);
    }
  }
}

let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
