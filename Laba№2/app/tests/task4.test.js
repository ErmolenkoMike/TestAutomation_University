const asyncFunc = require("../js/task4");

test("Test async function with error", async () => {
  await expect(asyncFunc()).rejects.toThrow("Async function error");
});