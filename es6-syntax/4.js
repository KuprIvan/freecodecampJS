const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this linea
arr.splice(1, 4)
// Only change code above this line
console.log(arr);
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
