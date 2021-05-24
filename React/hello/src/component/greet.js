// import React from 'react'

const Greet = (props) => {
const heading={
        fontSize:'2em',
        backgroundColor: 'black',
        color:'White'
    }
    return (
        <div>
            <h1 className="head" style={heading}>Welcome <br></br> {props.name}</h1>
            
            {props.children}
        </div>
    )
}

export default Greet

// import React from 'react'

// function Greet(){
//     return <h1>hello world</h1>
// }

// export default Greet