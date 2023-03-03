import React from 'react'
import { useState } from 'react';

const PureComponent = () => {
    const[counter,setCounter]=useState(0);
 const Increment=()=>{
        setCounter(counter+1);
    }
  return (
    <div className='pure'>
        <p>Number :{counter}</p>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default PureComponent