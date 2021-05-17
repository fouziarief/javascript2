// import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Button from './component/Button'

function onclick(){
  var btn = document.createElement("P");
  btn.innerText = "This is a Component Button.";
  document.body.appendChild(btn);
}
function App() {
  return (
    <div className="App"> 
        <Greet />
        <Welcome></Welcome>
        <Button color='green' text='Click Me' onClick={onclick}/>
    </div>
  );
}

export default App;
