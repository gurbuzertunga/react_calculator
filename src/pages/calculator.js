import React from 'react';
import App from '../components/App';

const Calculator = () => (
  <div
    className="content"
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <div>
      <p style={{
        fontSize: '1.2em',
      }}
      >
        Let&apos;s do some math!
      </p>
    </div>
    <App />
  </div>
);

export default Calculator;
