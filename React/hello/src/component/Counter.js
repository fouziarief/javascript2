import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props){
         super(props)
         this.state ={
             count :0,
             dCount:0
             
         }
     }
     
    likes(){
        this.setState
        ({
         count:this.state.count+1
        },  () => this.state.count )
    }
   disLikes(){
        this.setState
        ({
         dCount:this.state.dCount+1
        },  () => this.state.dCount ) 
   }
    // this.setState((prevState)=>({
    //     count:prevState.count+1
    // }))

    render() {
        return (
           

            <div  className='box1'>
                
               <div><button className='like' onClick ={()=>this.likes()}>Likes</button>
              {this.state.count} </div>
      
             <div > <button className='dislike'onClick ={()=>this.dislike()}>DisLikes</button>
             {this.state.dCount}</div>
             

            </div>
        )
    }
 }
    export default Counter