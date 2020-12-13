import React from 'react'

export default function MyComponent(props) {
    let myText = props.whatever ? props.whatever : "dog"
    return (
        <>
           <h1>Hi my name is brian</h1> 
           <button onClick={props.handleClick}>this button</button>
           <hr/>
           <h2>hi adam</h2>
           <p>{myText}</p>
        </>
    )
}
