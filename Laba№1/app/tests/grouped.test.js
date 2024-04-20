const { sumArray, positiveFilter, negativeFilter } = require("../js/array_utils");
const { isPalindrome, isAnagram } = require("../js/string_operations");


///// Function "describe" to create a group of tests for array_utils.js
describe("Tests for array_utils.js", () => {
  let testArray;

  beforeAll(() => {
    testArray = [4, 5.5, -3, 0, -8, 2.5, 0.5, -5];
  });

  ///// Test for function sumArray
  test("Returns sum of the array elements", () => {
    expect(sumArray(testArray)).toBe(-3.5);
  });

  ///// Test for function positiveFilter
  test("Returns array with only positive numbers", () => {
    expect(positiveFilter(testArray)).toEqual([4, 5.5, 2.5, 0.5])
  });

  ///// Test for function negativeFilter
  test("Returns array with only negative numbers", () => {
    expect(negativeFilter(testArray)).toEqual([-3, -8, -5])
  });
});



///// Function "describe" to create a group of tests for string_operations.js
describe("Tests for string_operations.js", () => {

  ///// Tests for function isPalindrome
  test("Returns true if string is palindrome", () => {
    expect(isPalindrome("civic")).toBe(true);

    expect(isPalindrome("madam")).toBe(true);

    expect(isPalindrome("Mr. Owl ate my metal worm")).toBe(true);
  });

  test("Returns false if string is not a palindrome", () => {
    expect(isPalindrome("mazda")).toBe(false);

    expect(isPalindrome("monday")).toBe(false);
  });

  ///// Tests for function isAnagram
  test("Returns true if two strings is anagrams", () => {
    expect(isAnagram("silent", "listen")).toBe(true);

    expect(isAnagram("heart", "earth")).toBe(true);

    expect(isAnagram("triangle", "integral")).toBe(true);
  });

  test("Returns false if two strings are not anagrams", () => {
    expect(isAnagram("winter", "summer")).toBe(false);

    expect(isAnagram("pineapple", "potato")).toBe(false);
  });
});