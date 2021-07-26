import React, { useState } from "react";

function randomChar() {
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let output = alphabets[Math.floor(Math.random() * alphabets.length)];
  return output;
}

export default function Letter() {
  const [fontSize, setFontSize] = useState("20px");
  const [opacity, setOpacity] = useState("100%");
  const opacityInterval = 2000; //milliseconds

  return (
    <div
      className='letter'
      style={{
        fontSize: fontSize,
        color: "red",
      }}
    >
      {randomChar()}
    </div>
  );
}
