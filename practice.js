// longest word
function LongestWord(sen) { 
    
  let words = sen.split(" ");
  let longWord = '';
  let longWordLength = 0;
  
  for (let w of words) {
      if (w.length > longWordLength) {
          longWord = w;
          longWordLength = w.length;
      }
  }
return longWord
}

// first factorial
function FirstFactorial(num) { 
  if (num < 2) return 1
  return num * FirstFactorial(num-1)
}

// first reverse
function FirstReverse(str) { 
  let newStr = ''
  for (let i=str.length-1; i>=0; i--) {
    newStr += str[i]
  }
  // code goes here  
  return newStr; 
}
  
