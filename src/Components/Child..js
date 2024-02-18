import React from 'react'

export default function Child(props) {
  return (
    <div>
        {/* <button  onClick={props.greethandle}>createparent</button> */}

    <button onClick={()=>props.greethandle("ravi")}>parent</button>


    </div>
  )
  
}
