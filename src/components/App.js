import React, { useState } from 'react';
import ButtonPanel from './buttonPanel';
import Display from './display';
import '../index.css';
import calculate from '../logic/calculate';

const data = {
  total: null,
  next: null,
  operation: null,
};

const App = () => {
  const [state, setState] = useState(data);

  const handleClick = buttonName => {
    const { total, next, operation } = calculate(state, buttonName);
    setState({ total, next, operation });
  };

  const update = () => {
    let { total, next } = state;
    total = total || '0';
    next = next || '0';
    if (next !== '0') return next;
    return total;
  };

  return (
    <>
      <div className="App">
        <Display result={update()} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
