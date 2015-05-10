
/**
 * Module dependencies.
 */

var happhappy = require('happy-numbers');

function run() {
  var n = prompt('Enter number:');
  getN(n);
  return;
}

function getN(n) {
  alert("Happy Number? " +n+ ": " +happhappy(n));
  if (prompt('K?') === 'k') {
   run();
  }
}

/**
 * GO!
 */

run();

