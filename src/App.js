import ButtonPanel from './components/buttonPanel';
import Display from './components/display';
import './index.css';

function App() {
  return (
    <div className="App">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
