import React from 'react'
import { useState } from 'react'

export default function Useeffect() {
    const[value,setValue]=useState(0)
    const Increment=()=>{
        setValue(value+1);
    }
  return (
    <div>
        <p>Count:{value}</p>
        <button onClick={Increment}>Click Me</button>
        </div>
  )
}

