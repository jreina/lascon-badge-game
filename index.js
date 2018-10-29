const fs = require('fs');
const base64 = require('base-64');

const message = fs.readFileSync('message.txt', { encoding: 'utf8' });
const lines = message.split('\r\n');

const log = x => console.log(x);
const add = (a, b) => a + b;
const pos = index => traversable => traversable[index];
const prop1 = obj => key => obj[key];
const last = arr => arr[arr.length - 1];
const chunk = (n, arr) =>
  arr.reduce(
    (memo, val) => {
      if (last(memo).length === n) memo.push([]);
      last(memo).push(val);
      return memo;
    },
    [[]]
  );
const tap = f => x => {
  f(x);
  return x;
};
const bin2Ascii = str =>
  chunk(8, [...str])
    .map(x => x.join(''))
    .map(arr => Number.parseInt(arr, 2))
    .map(charCode => String.fromCharCode(charCode))
    .join('');
const mappings = { E: '00', F: '01', G: '10', H: '11' };

// FEHGFFFEFFEFFHFFFEHFFGGGFEGFEHEGFEHEFGGGFGFHEHFFFEHEFGGGFEFFFHGFFEHFFEEFEHHFEHHF
const EFGH = lines.map(pos(50)).reduce(add);
log(EFGH);

// 0100111001010100010100010111010101001101011010100100100100110010010011000110101001100111001101010100110001101010010001010111100101001101010000010011110100111101
const bin = [...EFGH].map(prop1(mappings)).reduce(add);
log(bin);

//NTQuMjI2Ljg5LjEyMA==
const ascii = bin2Ascii(bin);
console.log(ascii);

// 54.226.89.120
const ipAddr = base64.decode(ascii);
console.log(ipAddr);
