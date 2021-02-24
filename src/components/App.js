import React from 'react';
import ButtonPanel from './buttonPanel';
import Display from './display';
import '../index.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({ total, next, operation });
  }

  update = () => {
    let { total, next } = this.state;
    total = total || '0';
    next = next || '0';
    console.log({ total, next });
    if (next !== '0') return next;
    return total;
  };

  render() {
    return (
      <>
        <div className="App">
          <Display result={this.update()} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
