const { containsObject, containsWord, containsField, arrayCallback, phraseCallback } = require("../js/task9_functions");


///// Test for function containsObject
test("Returns true if array contains specified object", () => {
  let array = [
    {
      carBrand: "KIA",
      model: "K5",
      year: 2021
    },
    {
      carBrand: "Lincoln",
      model: "Navigator",
      year: 2023
    }
  ];

  let object = {
    carBrand: "Lincoln",
    model: "Navigator",
    year: 2023
  };

  expect(containsObject(array, object)).toBe(true);
});

test("Returns false if array does not contain specified object", () => {
  let array = [
    {
      carBrand: "KIA",
      model: "K5",
      year: 2021
    },
    {
      carBrand: "Lincoln",
      model: "Navigator",
      year: 2023
    }
  ];

  let object = {
    carBrand: "Dodge",
    model: "Durango",
    year: 2021
  };

  expect(containsObject(array, object)).toBe(false);
});


///// Test for function containsWord
test("Returns true if text contains specified word", () => {
  let text = "Install Jest using your favorite package manager";
  let word = "Jest";

  expect(containsWord(text, word)).toBe(true);
});

test("Returns false if text does not contain specified word", () => {
  let text = "Install Jest using your favorite package manager";
  let word = "JavaScript";

  expect(containsWord(text, word)).toBe(false);
});


///// Test for function containsField
test("Returns true if object returned by function contains specified field", () => {
  let func = () => ({
    country: "Ukraine",
    capital: "Kyiv"
  });
  let field = "capital";

  expect(containsField(func, field)).toBe(true);
});

test("Returns false if object returned by function does not contain specified field", () => {
  let func = () => ({
    country: "Ukraine",
    capital: "Kyiv"
  });
  let field = "area";

  expect(containsField(func, field)).toBe(false);
});


///// Test for function arrayCallback
test("Checks number of callback runs", () => {
  let arr = [1, 2, 3, 4];
  let callback = jest.fn();

  arrayCallback(arr, callback);

  expect(callback.mock.calls.length).toBe(4);
});


///// Test for function phraseCallback
test("Checks with which arguments callback is called", () => {
  let text = "jest.fn() Returns a new, unused mock function.";
  let callback = jest.fn();

  phraseCallback(text, callback);

  expect(callback.mock.calls.length).toBe(1);

  expect(callback.mock.calls[0][0]).toEqual(["jest.fn()", "Returns", "a", "new,", "unused", "mock", "function."]);
});



let person = {
  firstName: "Jim",
  lastName: "Carrey"
};

person.introduce = function () {
  console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
};

///// Test for object person and its introduce method
test("Checks number of calls to introduce method", () => {
  let spy = jest.spyOn(person, "introduce");

  person.introduce();
  person.introduce();

  expect(spy).toHaveBeenCalledTimes(2);

  spy.mockRestore();
});