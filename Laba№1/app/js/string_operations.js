function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s|\W/g, "");

  return str === str.split("").reverse().join("");
}

isPalindrome("racecar");


function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s|\W/g, "");
  str2 = str2.toLowerCase().replace(/\s|\W/g, "");

  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

module.exports = { isPalindrome, isAnagram };