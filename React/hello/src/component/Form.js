import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName :" ",
             comment : ""
        }
    }
    change =event => {
this.setState=({
    userName:event.target.value
})
    }
    comentChange = event => {
        this.setState=({
            comment:event.target.value
        })
            }
    
    render() {
        return (
            <form>
            <div className='box2'>
                <div>
                    <p>Any Comments ,Please enter</p>
                   <label>Name</label>
                   <input type ='text' 
                   value={this.state.userName} 
                   onChange={this.change}></input>
            </div>
            <div>
            <br/>
            <label>Comments</label>
            <textarea
            value={this.state.comment}
            onChange={this.comentChange}/>
            </div>
            </div>
            </form>
        )
    }
}

export default Form
