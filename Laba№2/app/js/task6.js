function fetchFakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Illia",
        lastname: "Hrymalo"
      });
    }, 1000);
  });
}

async function callFakeAPI() {
  const response = await fetchFakeAPI();
  return response;
}

module.exports = { fetchFakeAPI, callFakeAPI };