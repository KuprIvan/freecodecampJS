function findLongestWordLength(str) {
  return +str.split(' ').map(elem => elem.length).sort((a, b) => b - a).slice(0, 1)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
