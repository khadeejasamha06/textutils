import React from 'react';

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a quick way to analyze your text.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}