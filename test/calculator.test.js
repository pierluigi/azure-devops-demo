var assert = require("assert");
var greetings = require("../calculator");

describe("Calculator", function() {
  it("Says Hello in English", function() {
    assert.equal(greetings.sayHelloInEnglish(), "HELLO");
  });
});
