'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    // If called with no arguments: return sum and reset
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    // Sum all arguments passed in this specific call
    const currentBatch = args.reduce((acc, val) => acc + val, 0);

    sum += currentBatch;

    // Return the function itself to allow further chaining
    return adder;
  };
}

module.exports = makeInfinityAdder;
