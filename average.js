
function sendToTheCloud(r) {
  // set a vscode breakpoint here
  r = '`' + r + '`';
  throw new Error('the cloud is unreachable, result', r);
}

function average(numbers) {
  let av = 0;
  for (let n of numbers) {
    av += n;
  }

  const r = av / numbers.length;
  sendToTheCloud(r);

  return r;
}

module.exports = average;
