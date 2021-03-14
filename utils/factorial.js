function factorial(num){
  console.log('num :>> ', num);
  if (num === 0)
  { return 1 }
  return num * factorial(num-1);
}

module.exports = factorial
