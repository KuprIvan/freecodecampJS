function areaLargestSquare(r) {
  return 2 * r ** 2
}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Testing --- Area largest square --- ", () => {
  it("Basic tests", () => {
    assert.strictEqual(areaLargestSquare(5), 50);
    assert.strictEqual(areaLargestSquare(7), 98);
    assert.strictEqual(areaLargestSquare(15), 450);
  });
});
