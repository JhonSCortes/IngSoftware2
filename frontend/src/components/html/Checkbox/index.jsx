import React from "react";
import './CheckboxComponent.css';

const CheckboxComponent = (props) => {

  const onInputChange = (event) => {
      props.inputController(props.label, event.target.value);
    }

  return (
    <>
      <div className="checkbox_div">
        <label className="checkbox_text"> {props.text} </label>
        <input className="checkbox_field" type="checkbox" onChange={(e) => onInputChange(e)} />
      </div>
    </>
  );
};

export default CheckboxComponent;
