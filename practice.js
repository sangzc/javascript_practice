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
// valid parenthesis
var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length <= 1) return false
    let openBank = new Set(['{', '[', '('])
    let closeBank = new Set(['}', ']', ')'])
    let opposites = {
        "}":"{",
        ")":"(",
        "]":"["
    }
    let opens = [];
    for (let i=0; i<s.length; i++) {
        if (openBank.has(s[i])) {
            opens.push(s[i])
        } else if (closeBank.has(s[i])) {
            if (opposites[s[i]] !== opens[opens.length-1]) {
                return false
            } else {
                lastOpen = opens.pop()
            }
        }
    }
    return opens.length === 0
};