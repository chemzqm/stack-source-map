/*global describe, it*/
require('..')()
var assert = require('assert')

describe('fail', function() {
  it('should fail', function () {
    assert.equal(1, 2)
  })
})
