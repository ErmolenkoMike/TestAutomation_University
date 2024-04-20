const { fetchFakeAPI, callFakeAPI } = require("../js/task6");

test("Check the response from the fake API", async () => {
  const expectedResponse = {
    id: expect.any(Number),
    name: expect.any(String),
    lastname: expect.any(String)
  };
  const response = await callFakeAPI();
  expect(response).toEqual(expectedResponse);
});