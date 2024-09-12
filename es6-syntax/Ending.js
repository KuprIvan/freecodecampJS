function confirmEnding(str, target) {
  let tempLength = target.length
  return str.slice(-tempLength) === target;
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"))
