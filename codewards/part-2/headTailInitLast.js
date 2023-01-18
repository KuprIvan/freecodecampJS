const head = (arr) => {
  let newArr = arr.slice()
  return newArr[0];
};
const tail = (arr) => {
  let newArr = arr.slice()
  return newArr.slice(1);
};
const init = (arr) => {
  let newArr = arr.slice()
  return newArr.slice(0, arr.length - 1);
};
const last = (arr) => {
  let newArr = arr.slice();
  return newArr[arr.length - 1]
};
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Array methods", function() {
  it("Sample Tests", function() {
    assert.strictEqual(head([5,1]), 5);
    assert.deepEqual(tail([1]), []);
    assert.deepEqual(init([1,5,7,9]), [1,5,7]);
    assert.strictEqual(last([7,2]), 2);
  });
});
