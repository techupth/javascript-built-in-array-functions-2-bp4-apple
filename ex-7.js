function isPalindrome(string) {
  const lowerCaseString = string.toLowerCase();
  const reversedString = lowerCaseString.split('').reverse().join('');
  return lowerCaseString === reversedString;
}


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false