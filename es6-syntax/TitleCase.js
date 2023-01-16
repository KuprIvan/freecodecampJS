function titleCase(str) {
  let lowerCase = str.toLowerCase()
  let temp = lowerCase.split(' ')
  let tempArray = []
  for(let i = 0; i < temp.length; i++) {
    let str = temp[i].slice(0, 1).toUpperCase() + temp[i].slice(1) 
    tempArray.push(str)
  }
  return tempArray.join(' ');
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"))
