import React from "react";
import Letter from "./Letter";

export default function RainDrop({ numberOfLetters, rainSpeed }) {
  const tempCounter = new Array(numberOfLetters).fill('');
  
  return(
  <div>
    {tempCounter.map((v,idx) => <Letter />)}
  </div>);
}
RainDrop.defaultProps = {
  numberOfLetters: 10,
  rainSpeed: 200, //millisec
};
