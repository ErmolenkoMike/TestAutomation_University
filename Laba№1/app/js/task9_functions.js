function containsObject(arr, obj) {
  for (let el of arr) {
    if (JSON.stringify(el) === JSON.stringify(obj)) {
      return true;
    }
  }
  return false;
}



function containsWord(text, word) {
  text = text.toLowerCase();
  word = word.toLowerCase();

  return text.indexOf(word) >= 0;
}



function containsField(func, field) {
  let obj = func();

  return obj.hasOwnProperty(field);
}



function arrayCallback(arr, callback) {
  for (let el of arr) {
    callback(el);
  }
}



function phraseCallback(text, callback) {
  let words = text.split(" ");

  callback(words);
}


module.exports = { containsObject, containsWord, containsField, arrayCallback, phraseCallback }