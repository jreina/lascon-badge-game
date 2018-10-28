const fs = require('fs');
const base64 = require('base-64');

const message = fs.readFileSync('message.txt', { encoding: 'utf8' });
const lines = message.split('\r\n');

const log = x => console.log(x);
const add = (a, b) => a + b;
const pos = index => traversable => traversable[index];

// Welcome to the LASCON 2018 badge game!
// lines.map(base64.decode).forEach(log);

// FEHGFFFEFFEFFHFFFEHFFGGGFEGFEHEGFEHEFGGGFGFHEHFFFEHEFGGGFEFFFHGFFEHFFEEFEHHFEHHF
// log(lines.map(pos(50)).reduce(add));
