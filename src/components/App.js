import ButtonPanel from './buttonPanel';
import Display from './display';
import '../index.css';

const App = () => (
  <>
    <div className="App">
      <Display result="0" />
      <ButtonPanel />
    </div>
  </>
);

export default App;
