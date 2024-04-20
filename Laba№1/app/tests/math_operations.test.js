const { addition, substract, multiply, divide } = require('../js/math_operations');

///// Tests for function addition
test("Adds 2 and 3 to equal 5", () => {
  expect(addition(2, 3)).toBe(5)
});

test("Adds -2 and 0.5 to equal -1.5", () => {
  expect(addition(-2, 0.5)).toBe(-1.5)
});


///// Tests for function substract
test("Substracts 3 from 2 to equal -1", () => {
  expect(substract(2, 3)).toBe(-1)
});

test("Substracts -0.5 from -2 to equal -1.5", () => {
  expect(substract(-2, -0.5)).toBe(-1.5)
});


///// Tests for function multiply
test("Multiply 4 and 2 to equal 8", () => {
  expect(multiply(4, 2)).toBe(8)
});

test("Multiply -6 and 0.5 to equal -3", () => {
  expect(multiply(-6, 0.5)).toBe(-3)
});


///// Tests for function divide 
test("Divides 10 by 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5)
});

test("Divides -2 by 0.5 to equal -4", () => {
  expect(divide(-2, 0.5)).toBe(-4)
});


///// Test to check division by zero
test("Throws an error when dividing by 0", () => {
  expect(() => {
    divide(2, 0);
  }).toThrow("Division by zero is impossible")
});