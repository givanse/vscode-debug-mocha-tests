import Math from './math.js'

function logger() {
  /* eslint-disable no-console */
  console.log(arguments);
}

let math = new Math();

let numbers = [100, 200, 300];

logger('average: ', math.average(numbers));

logger('sum: ', math.sum(numbers));
