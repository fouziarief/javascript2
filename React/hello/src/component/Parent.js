import React, { Component } from 'react'
import Child from './Child'


 class Parent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             parentNumber: 'Guess the number',
            //   number:[Math.floor(Math.random()*10)]
         }
         this.guessNumber=this.guessNumber.bind(this)
     }
     
     guessNumber(){
         const number=[Math.floor(Math.random()*10)]
        const input=prompt(`Hello ${this.state.parentNumber}`)
    
        // this.setState ({
        //     number :this.state.number
        // })
        this.state.number ===input ?
            <div>(`You guessed right,your Number is ${number}`)</div> :
            <div>`You guessed Wrong,The Right Number is ${number}`</div> 
     }
    render() {
        return (
            <div>
               <Child guessHandler ={this.guessNumber} />
              
            </div>
        )
    }
}

export default Parent
