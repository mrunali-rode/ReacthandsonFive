import React from 'react';
import { useState } from 'react';

function HOC(WrappedComponent) {
    const Higher =(props)=>{
        const [counter ,setCounter]=useState(0);
        const Increment = () =>{
          setCounter(counter +1);
        };
  
  return (
    <div className=''> 
       <WrappedComponent counter={counter} Increment={Increment}/>
    </div>
  );
};
return Higher;
};

export default HOC;