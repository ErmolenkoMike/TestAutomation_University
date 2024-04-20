const { addition, substract, multiply, divide } = require('../js/math_operations');

///// Parameterized test for function addition
const additionParams = [
  [2, 5, 7],
  [-3, 0.5, -2.5],
  [0, 4, 4]
];

test.each(additionParams)("Adds %d and %d to equal %d", (a, b, expected) => {
  expect(addition(a, b)).toBe(expected)
});


///// Parameterized test for function substract
const substractParams = [
  [4, 10, -6],
  [-5.5, -3, -2.5],
  [2, 0, 2]
]

test.each(substractParams)("Substracts %d from %d to equal %d", (a, b, expected) => {
  expect(substract(a, b)).toBe(expected)
});


///// Parameterized test for function multiply
const multiplyParams = [
  [3, 3, 9],
  [-3, 2.5, -7.5],
  [0, 5, 0]
]

test.each(multiplyParams)("Multiply %d and %d to equal %d", (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected)
});


///// Parameterized test for function divide
const divideParams = [
  [6, 3, 2],
  [-2, 0.5, -4],
  [0, 1, 0]
]

test.each(divideParams)("Divides %d by %d to equal %d", (a, b, expected) => {
  expect(divide(a, b)).toBe(expected)
});


///// Parameterized test to check division by zero
const divideByZeroParams = [
  [2, 0],
  [-2, 0],
  [0, 0]
];

test.each(divideByZeroParams)("Throws an error when dividing by 0", (a, b) => {
  expect(() => {
    divide(a, b);
  }).toThrow("Division by zero is impossible")
});
