let input = 'turpentine and turtles';
let vowels = 'aeiou';
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] ==='u') {
        resultArray.push(input[i]);
      }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

let resultString = resultArray.join('');
resultString = resultString.toUpperCase();

console.log(resultString);