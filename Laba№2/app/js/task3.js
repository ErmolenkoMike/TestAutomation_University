async function asyncFunc1() {
  return Promise.resolve(21);
}

async function asyncFunc2() {
  const result = await asyncFunc1() * 2;
  return result;
}

module.exports = { asyncFunc1, asyncFunc2 };