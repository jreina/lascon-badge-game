const fs = require('fs');
const base64 = require('base-64');

const message = fs.readFileSync('message.txt', { encoding: 'utf8' });

message
  .split('\r\n')
  .map(base64.decode)
  .forEach(console.log);
