let input = 'I have a lot of things to do today including getting ready for work which i am kind of looking forward to';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (inputIndex = 0; inputIndex < input.length; inputIndex++) {
  if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex]);
  }
  if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
  //console.log(inputIndex);
  for (vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    //console.log(vowelsIndex);
    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
