// import logo from './logo.svg';
// import React , {useState} from 'react';
import './App.css';
import Greet from './component/Greet'
import Messg from './component/Messg'
import Parent from './component/Parent'
// import Welcome from './component/Welcome'
// import Button from './component/Button'
//  import Hello from './component/Hello'
  
 import StyleSheet from './component/StyleSheet'
import Form from './component/Form'
import Counter from './component/Counter'
function App() {
  
  
  return (
     <div className="App"> 
        <Greet name ="User">
       
          {/* <button>Hire Me</button>  */}
        </Greet>  
          {/* <Welcome></Welcome>
        <Button color={colorStart} text={textStart} onClick={changeData}/> */}
        {/* <Hello/>  */}
         <Messg></Messg>   
         <Parent ><p>Do You Like the Game</p></Parent>
        {/* <StyleSheet /> */}
         <Counter/>
         <Form></Form> 

    </div>
  );
}

export default App;
