const { isPalindrome, isAnagram } = require("../js/string_operations");

///// Tests for function isPalindrome
test("Returns true if string is palindrome", () => {
  expect(isPalindrome("civic")).toBe(true);

  expect(isPalindrome("madam")).toBe(true);

  expect(isPalindrome("Mr. Owl ate my metal worm")).toBe(true);
});

test("Returns false if string is not a palindrome", () => {
  expect(isPalindrome("mazda")).toBe(false);

  expect(isPalindrome("monday")).toBe(false);
})


///// Tests for function isAnagram
test("Returns true if two strings is anagrams", () => {
  expect(isAnagram("silent", "listen")).toBe(true);

  expect(isAnagram("heart", "earth")).toBe(true);

  expect(isAnagram("triangle", "integral")).toBe(true);
})

test("Returns false if two strings are not anagrams", () => {
  expect(isAnagram("winter", "summer")).toBe(false);

  expect(isAnagram("pineapple", "potato")).toBe(false);
})