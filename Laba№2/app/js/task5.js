async function getRandomCatFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  };
}

module.exports = getRandomCatFact;