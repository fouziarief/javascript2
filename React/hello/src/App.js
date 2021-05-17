import logo from './logo.svg';
import './App.css';
import greet from './component/greet'
import welcome from './component/welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <greet></greet>
        <welcome></welcome>
        </p>
       
      </header>
    </div>
  );
}

export default App;
