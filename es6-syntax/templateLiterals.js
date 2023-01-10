const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  let tempStr = '';
    for (let i = 0; i < result.failure.length; i++) {
    tempStr = `<li class="text-warning">${result.failure[i]}</li>`;
    failureItems.push(tempStr)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
