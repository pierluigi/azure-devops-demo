var assert = require("assert");
var utils = require("../lib/utils");

describe("Utils", function() {
  it("Says Hello World", function() {
    assert.equal(utils.greetings("World"), "Hello World 👋👋");
  });
});
