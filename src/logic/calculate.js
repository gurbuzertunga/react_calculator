import operate from './operate';

const calculate = (data, name) => {
  let { total, next, operation } = data;

  total = total || '';
  next = next || '';
  if (name === '+/-') {
    if (total && !operation) total = operate(total, '-1', 'X');
    else if (total && operation) next = operate(next, '-1', 'X');
  }
  if (name === '%') {
    if (next) next = operate(next, '100', '/');
    else if (total) total = operate(total, '100', '/');
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
  if (name === '+' || name === '-' || name === 'X' || name === '/') {
    operation = name;
  }

  if (total && operation) {
    if (/\d/.test(name)) {
      next += name;
    }
  }

  if (name === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  return { total, next, operation };
};

export default calculate;
