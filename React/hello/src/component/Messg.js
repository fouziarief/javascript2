import React, { Component } from 'react'

class Messg extends Component{
    constructor(){
        super()
        this.state ={
            message:'Do You Like to Play Number Guess Game'

        }
    }
    change(){
        this.setState({
            message:'Lets Play'


        })
    }
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
           <button className="btn" onClick ={()=> this.change()}>click Here</button>
            </div>
            )
    }
}
export default Messg