let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

function cleanWord(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function changeWord(message, originalWord, newWord) {
  let wordsArray = message.split(' ');
  for (let i = 0; i < wordsArray.length; i++) {
    // Compare cleaned word (stripping punctuation) with the original word
    if (cleanWord(wordsArray[i]) === originalWord) {
      // Replace the word but keep punctuation
      wordsArray[i] = wordsArray[i].replace(cleanWord(wordsArray[i]), newWord);
    }
  }
  
  let newMessage = wordsArray.join(' ');
  return newMessage;
}

console.log(changeWord(retreatMessage, 'dogs', 'cats'));