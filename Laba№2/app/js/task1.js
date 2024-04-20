function fn1(fn2, name, lastname) {
  return fn2(name, lastname);
}

module.exports = fn1;