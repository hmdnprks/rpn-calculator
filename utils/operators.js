const fac = require('./factorial');

module.exports = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
  '^': (x, y) => Math.pow(x, y),
  '!': (x) => fac(x),
  '%': (x) => x / 100,
};