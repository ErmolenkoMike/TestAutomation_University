const fn1 = require("../js/task1");

test("Test calling fn2 with arguments name and lastname", () => {
  const mockFunction2 = jest.fn();

  fn1(mockFunction2, "Illia", "Hrymalo");

  expect(mockFunction2).toHaveBeenCalledWith("Illia", "Hrymalo");
});