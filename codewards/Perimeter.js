function perimeterSequence(a,n) {
  return (a * 4) * n
}const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(perimeterSequence(1,3), 12)
  });
});

