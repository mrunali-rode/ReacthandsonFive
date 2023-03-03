import React, {useState} from 'react'

function Counter() {
    const[data,setData]=useState(0)
  return (
    <>
       <h2>{data}</h2>
       <button onClick={()=> {setData(data +1)}}>Increase</button> <br/>
       <button onClick={()=> {setData(data -1)}}>Decrease</button> 
       <button onClick={()=> {setData(0)}}>Reset</button>
    </>
  )
}

export default Counter