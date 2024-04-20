const { sumArray, positiveFilter, negativeFilter } = require("../js/array_utils");

let testArray;

beforeAll(() => {

  testArray = [4, 5.5, -3, 0, -8, 2.5, 0.5, -5];

})


///// Test for function sumArray
test("Returns sum of the array elements", () => {
  expect(sumArray(testArray)).toBe(-3.5)
});


///// Test for function positiveFilter
test("Returns array with only positive numbers", () => {
  expect(positiveFilter(testArray)).toEqual([4, 5.5, 2.5, 0.5])
});


///// Test for function negativeFilter
test("Returns array with only negative numbers", () => {
  expect(negativeFilter(testArray)).toEqual([-3, -8, -5])
});