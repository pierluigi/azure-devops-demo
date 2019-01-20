var assert = require("assert");
var utils = require("../lib/utils");

describe("Utils", function() {
  describe("greetings", function() {
    it("Says Hello World", function() {
      assert.equal(utils.greetings("World"), "Hello World 👋👋");
    });
  });
});
