/**
 * Module dependencies.
 */

var test = require('tape');
var x = require('../lib/arithm-fun');

/**
 * Tests
 */

test('generic', function (t) {

  t.plan(3);

  t.equal(x(1), 3);
  t.equal(x(2), 4);
  t.equal(x(3), 5);
  
});

