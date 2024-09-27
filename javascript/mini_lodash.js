// This is an implementation of some lodash methods, following Codecademy guidance in most methods

let _ = {
  clamp(number, lowerBound, upperBound) {
    return number > upperBound ? upperBound : number < lowerBound ? lowerBound : number;
  },
  inRange(number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    }
    if (startValue > endValue) {
      const temp = startValue;
      startValue = endValue;
      endValue = temp;
    }
    return number >= startValue && number < endValue;
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - (string.length + startPaddingLength);
    return ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  },
  has(object, key) {
    const keys = Object.keys(object);
    return keys.includes(key);
  },
  invert(object) {
    const invertedObject = {};
    for (let key in object) {
      invertedObject[object[key]] = key;
    }
    return invertedObject;
  },
  findKey(object, predicateFunction) {
    for (let key in object) {
      if (predicateFunction(object[key])) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, numberToDrop) {
    numberToDrop = numberToDrop || 1;
    const newArray = array.slice(numberToDrop);
    return newArray;
  },
  dropWhile(array, predicateFunction) {
    const dropNumber = array.findIndex((element, index) => !predicateFunction(element, index, array));
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) {
    size = size || 1;
    let chunks = [];
    let i = 0;
    while (i < array.length) {
      chunks.push(array.slice(i, i + size));
      i += size;
    }
    return chunks;
  }
};

export default _;