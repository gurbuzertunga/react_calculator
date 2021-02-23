import ButtonPanel from './buttonPanel';
import Display from './display';
import '../index.css';
import Calculate from '../logic/calculate';

const App = () => (
  <>
    <div className="App">
      <Display result="0" />
      <ButtonPanel />
      <Calculate />
    </div>
  </>
);

export default App;
