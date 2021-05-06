import './App.css';
import Home from './components/Home';

function App(props) {
  return (
    <div>
      <Home authState={props.authState} />
    </div>
  );
}

export default App;
