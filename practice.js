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

// first reverse

