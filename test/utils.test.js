var assert = require('assert');
var utils = require('../lib/utils');

describe('Utils', function () {
  describe('greetings', function () {
    it('Says Hello World', function () {
      assert.equal(utils.greetings('World'), 'Hello World 👋👋');
    });

    it('Throws on missing params', function () {
      assert.throws(() => {
        utils.greetings();
      }, Error);
    });

    it('Throws on empty string', function () {
      assert.throws(() => {
        utils.greetings('');
      }, Error);
    });

    it('Does not throw on a valid string', function () {
      assert.doesNotThrow(() => {
        utils.greetings('Valid!');
      }, Error);
    });
  });
});
