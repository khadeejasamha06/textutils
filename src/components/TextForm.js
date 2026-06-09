
import React, { useState } from 'react';

export default function TextForm(props) {

const handleOnChange = (event) => {
  console.log("someone tried to write something");
  setText(event.target.value);
}

const covertToUpper = () => {
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase Successfully", "success");
}

const covertToLower = () => {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase Successfully", "success");
}

const deletebtn = () => {
  setText("");
  props.showAlert("Text Cleared Successfully", "success");
}



const [text, setText] = useState("enter you text here....");

  return (
    <>
    <div
  className="container my-3"
  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Enter your text below
        </label>

        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleOnChange}
          rows="8"
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
          ></textarea> 
      </div>

      <button className="btn btn-primary mx-2" onClick={covertToUpper} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={covertToLower} >Convert to Lowercase</button>
      <button className="btn btn-secondary mx-2" onClick={deletebtn} >Clear Text</button>
      
    </div>

    <div className="container my-3">

    <h3> count of words and charecters</h3>

    <p> {text.split(" ").length} words and {text.length} charecters </p>

    </div>

  </>
  );
}

