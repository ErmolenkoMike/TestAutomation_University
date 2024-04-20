const getRandomCatFact = require("../js/task5");

test("Fetch random cat fact", async () => {
  const data = await getRandomCatFact();
  expect(data).toEqual(expect.objectContaining({
    fact: expect.any(String),
    length: expect.any(Number)
  }));
});