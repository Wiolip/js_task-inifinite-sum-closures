'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    let sum = 0;

  return function adder(...args) {
    // If no arguments are passed, return the current sum and reset it
    if (args.length === 0) {
      const result = sum;
      sum = 0;
      return result;
    }

    // Add all arguments from the current call to the total sum
    sum += args.reduce((acc, val) => acc + val, 0);

    // Return the function itself to allow for infinite chaining
    return adder;
  };
}

module.exports = makeInfinityAdder;
