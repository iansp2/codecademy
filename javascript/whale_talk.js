let input = 'turpentine and turtles';
let vowels = 'aeiou';
const resultArray = [];

// Rules of whale talk: only vowels, E's and U's are doubled, all caps
for (const char of input) {
  if (char === 'e' || char ==='u') {
        resultArray.push(char);
      }
  for (const letter of vowels) {
    if (char === letter) {
      resultArray.push([char]);
    }
  }
}

let resultString = resultArray.join('');
resultString = resultString.toUpperCase();

console.log(resultString);