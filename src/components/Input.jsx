import React from 'react';

function Input(props) {

  return (
    <div className="inputfield">
      <form >
        <input
        className="input"
        autoFocus
        onChange={props.handleChange}
        value={props.city}
        placeholder="Enter City Name"
        />

        <button
        onClick={props.handle}>
        </button>

      </form>
    </div>

  )
}


export default Input;
