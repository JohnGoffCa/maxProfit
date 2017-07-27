var assert = require("chai").assert;
var maxProfit = require("../max.js");
var maxProfitElegant = require("../maxElegant.js");

describe("Maximise Profits", function() {
  it("Should return 16 given [45, 24, 35, 31, 40, 38, 11]", function() {
    var arr = [45, 24, 35, 31, 40, 38, 11];
    assert.strictEqual(maxProfit(arr), 16);
  });

  it("Should return 8 given [1, 2, 3, 4, 5, 6, 7, 8, 9]", function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.strictEqual(maxProfit(arr), 8);
  });

  it("Should return -1 given [9, 8, 7, 6, 5, 4, 3, 2, 1]", function() {
    var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    assert.strictEqual(maxProfit(arr), -1);
  });

  it("Should return -1 given an array with a single member", function() {
    var arr = [1];
    assert.strictEqual(maxProfit(arr), -1);
  });

  it("Should return -1 given an array with non-numbers", function() {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f']
    assert.strictEqual(maxProfitElegant(arr), -1);
  });

  it("Should ignore non-numbers given a mixed array", function() {
    var arr = [2, 3, '11', 5, 'a', 2, true, 4];
    assert.strictEqual(maxProfit(arr), 9);
  });
});

describe("Maximise Profits More Elegantly", function() {
  it("Should return 16 given [45, 24, 35, 31, 40, 38, 11]", function() {
    var arr = [45, 24, 35, 31, 40, 38, 11];
    assert.strictEqual(maxProfitElegant(arr), 16);
  });

  it("Should return 8 given [1, 2, 3, 4, 5, 6, 7, 8, 9]", function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.strictEqual(maxProfitElegant(arr), 8);
  });

  it("Should return -1 given [9, 8, 7, 6, 5, 4, 3, 2, 1]", function() {
    var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    assert.strictEqual(maxProfitElegant(arr), -1);
  });

  it("Should return -1 given an array with a single member", function() {
    var arr = [1];
    assert.strictEqual(maxProfitElegant(arr), -1);
  });

  it("Should return -1 given an array with non-numbers", function() {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f']
    assert.strictEqual(maxProfitElegant(arr), -1);
  });

  it("Should ignore non-numbers given a mixed array", function() {
    var arr = [2, 3, '11', 5, 'a', 2, true, 4];
    assert.strictEqual(maxProfitElegant(arr), 9);
  });
})
