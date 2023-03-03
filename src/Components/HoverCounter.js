import React from "react";
// import { useState } from 'react';
import HOC from "./HOC";

const HoverCounter = (props) => {
  const { counter, Increment } = props;
  return (
    <div className="container">
      This will increase counter on Mouse Hover
      <br />
      Number : {counter}
      <br />
      <br/>
      <button onMouseOver={Increment}>Mouse Hover</button>
    </div>
  );
};

export default HOC(HoverCounter);
