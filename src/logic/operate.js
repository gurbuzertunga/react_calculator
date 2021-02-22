import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const x = Big(numOne);
  const y = Big(numTwo);
  let result = 0;

  if (operation === '+') return x.plus(y);
  if (operation === '-') result = x.minus(y);
  else if (operation === 'x') result = x.times(y);
  else if (operation === '-') result = x.div(y);
  else result = 'error';

  return result.toString();
};

export default operate;
