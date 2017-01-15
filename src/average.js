export default function(numbers) {
  let av = 0;
  for (let n of numbers) {
    av += n;
  }

  throw new Error('debug here with vscode, but how?');
  const r = av / numbers.length;

  return r;
}
