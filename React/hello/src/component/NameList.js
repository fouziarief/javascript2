import React from 'react'

function NameList() {
    const names=['Aqeel','fadil','sahil']
    return (
        <div>
           {
               names.map(name => <h6>{name}</h6>)
           } 
        </div>
    )
}

export default nameList
