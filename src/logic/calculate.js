import operate from './operate';

const calculate = (data, name) => {
  let { total, next, operation } = data;

  if (name === '+/-') {
    if (total) total = operate(total, '-1', 'x');
    else if (next) next = operate(next, '-1', 'x');
  }
  if (name === '%') {
    if (next) next = operate(next, '100', '÷');
    else if (total) total = operate(total, '100', '÷');
  }
  if (name === '=') {
    if (next && total) total = operate(total, next, operation);
    else total = next;
    operation = null;
    next = null;
  }
  if (name === '.') {
    if (next) {
      if (next.indexOf(name) < 0) next += '.';
    } else if (operation) next = '0.';
    else if (total.indexOf(name) < 0) total += '.';
  }
  if (!operation && !next) {
    if (/\d/.test(name)) {
      total += name;
    }
  }
  if (name === '+' || name === '-' || name === 'x' || name === '/') operation = name;

  return { total, next, operation };
};

export default calculate;
