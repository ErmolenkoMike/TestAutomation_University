const { asyncFunc2 } = require("../js/task3");

test("Test async function", async () => {
  const result = await asyncFunc2();
  expect(result).toBe(42);
});