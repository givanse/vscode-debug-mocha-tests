export default function(numbers) {
  /*eslint no-unreachable: "warn"*/
  
  let avrg = 0;
  for (let number of numbers) {
    avrg += number;
  }

  throw new Error('debug here with vscode, but how?');
  const result = avrg / numbers.length;

  return result;
}
