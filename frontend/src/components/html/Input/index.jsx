import { useNavigate } from 'react-router-dom';
import React from 'react';
import './InputComponent.css';

const InputComponent = (props) => {
  const navigateTo = useNavigate();

  const showForgotPassword = () => {
    if (props.label === 'Password') {
      return true
    } else {
      return false
    }
  }

  const onInputChange = (event) => {
    props.inputController(props.label, event.target.value);
  }

  return (
    <>
      <label className='input_label'> {props.label? props.label : ''} <a className={showForgotPassword()? 'password_redirect' : ''} onClick={() => navigateTo('reset-password')}> {showForgotPassword()? 'Forgot password?' : ''} </a> </label>
      <input className={props.label ? 'input_field' : 'input_submit'} type={props.type} onChange={(e) => onInputChange(e)} />
    </>
  )
}

export default InputComponent;
