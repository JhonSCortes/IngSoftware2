import InputComponent from "../../html/Input";
import CheckboxComponent from "../../html/Checkbox";
import { useState } from "react";
import "./LoginComponent.css";

// LoginComponent with Forms Controller.
const LoginComponent = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormInfo = (type, value) => {
    if (type === 'Email') {
      setEmail(value);
    } else if (type === 'Password') {
      setPassword(value);
    }
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('submitted.' + " Username: " + email + " Password: " + password);
  }

  const changeToRegisterComponent = (event) => {
    event.preventDefault();
    props.controllerFunction();
  }

  return (
    <>
      <div className="login_body">
        <div className="login_div">
          <span className="login_logo"> G </span>
          <h2 className="login_string"> Log-in </h2>
          <span className="login_string login_subtext"> Log with your user credentials, using your email and password. </span>
        </div>
        <form className="login_form" onSubmit={(e) => onFormSubmit(e)}>
          <InputComponent label='Email' type='text' inputController={(type, value) => handleFormInfo(type, value)} />
          <InputComponent label='Password' type='password' inputController={(type, value) => handleFormInfo(type, value)} />
          <CheckboxComponent text='Remember me' inputController={(type, value) => handleFormInfo(type, value)} />
          <InputComponent type='submit' />
        </form>
        <span className="footer_text"> New here? Open your task managing account! <a className="footer_redirect" onClick={(e) => changeToRegisterComponent(e)}> Register here  </a> </span>
      </div>
    </>
  )
}

export default LoginComponent;