const asyncFunction = require("../js/task2");

test("Test async function", async () => {
  await expect(asyncFunction()).resolves.toBe("Hello World");
});