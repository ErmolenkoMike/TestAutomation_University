async function asyncFunc() {
  throw new Error("Async function error");
}

module.exports = asyncFunc;