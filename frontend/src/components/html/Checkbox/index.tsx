import React from "react";
import './CheckboxComponent.css';
import { CheckboxInputProps } from "../../../interfaces/components";

const CheckboxComponent: React.FC<CheckboxInputProps> = (props) => {

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.label && props.inputController) {
      props.inputController(props.label, event.target.value);
    }
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
