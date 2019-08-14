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

// Search Naive String
// count the number of times a string shows up in a larger string
// outer loop and inner loop, inner loop breaks whenever outerloop + innerloop's index is not equal
function naiveString(A, B) {
    let count = 0;
    for (let i=0; i<A.length; i++) {
        for (let j=0; j<B.length; j++) {
          if (B[j] !== A[i+j]) break
          if (j === B.length-1) count++
        }
    }
    return count || -1
};

// KMP Pattern Matching Substring Search - First Occurence Of SubString
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0
    let result = -1
    for (let i=0; i<haystack.length; i++) {
        for (let j=0; j<needle.length; j++) {
            if (haystack[i+j] !== needle[j]) break
            if (j === needle.length-1) return i
        }
    }
    return result;
};

// Bubble Sort
function(nums) {
    for (let i=nums.length-1; i>=0; i--) {
        for (let j=0; j<i; j++) {
            console.log(i, j)
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
};