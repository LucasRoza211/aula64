import './App.css';
import SetColor from './components/SetColor';
import LazySetState from './components/LazySetState';
import PrevState from './components/PrevState';
import SetStateClass from './components/SetStateClass';
import SetStateFunction from './components/SetStateFunction';
import SetStateForm from './components/SetStateForm';

function App() {
  return (
    <div className="App">
      <SetColor />
      <LazySetState />
      <PrevState />
      <SetStateClass />
      <SetStateFunction />
      <SetStateForm />
    </div>
  );
}

export default App;
