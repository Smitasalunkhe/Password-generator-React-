import React from 'react'
import './PassGenerator.css';
import { useState } from 'react';

function PassGenerator() {

  let [state, setState] = useState("");

  function handleClick() {
    let pass = "";

    let set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789" + "!@#$%&*";

    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * set.length);
      setState(pass += set.charAt(char));
    }

    console.log(pass);
  }


  function CopyFunction() {
    navigator.clipboard.writeText(state);
  }


  return (
    <div className='container'>
      <h1>Password Generator</h1>

      <div className='input-container'>
        <input type='text' readOnly id='input' value={state} />
        {/* <input type='range' /> */}
      </div>

      <div className='button-container'>
        <button id='btn1' onClick={handleClick}>Generate Password</button>
        <button id='btn2' onClick={CopyFunction}>Copy Password</button>
      </div>
    </div>
  )
}

export default PassGenerator;







//Math.random generates a number between 0 and 1, that isn’t a whole number, and also isn’t 1. To get a number, for example between 0 and 10, multiply your answer by 10: Math.random() * 10 To get it to be a whole number, i.e. an integer, apply Math.floor, which rounds down to the nearest whole number: Math.floor(Math.random() * 10) To get a whole number between 1 and 10, add 1 to the answer: Math.floor(Math.random() * 10 + 1) Hope that helps! I just learned this and thought it might help me if I try to explain it :-)

//The charAt() method returns the character at the specified index in a string. 