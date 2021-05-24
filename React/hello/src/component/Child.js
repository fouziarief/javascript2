import React from 'react'

function Child(props) {
    return (
        <div className='box'>
            <p>Guess Number Between 0 to 9</p>
           <button className='btn' onClick={props.guessHandler}>Guess</button> 
        </div>
    )
}

export default Child
