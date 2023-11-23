import InputComponent from "../../html/Input";
import CheckboxComponent from "../../html/Checkbox";
import { useForm } from "../../../hooks/useForm";
import { AxiosResponse } from "axios";
import { useState } from "react";
import "./LoginComponent.css";

interface Props {
  goToDashboard: () => void,
  controllerFunction: () => void,
}

// LoginComponent with Forms Controller.
const LoginComponent: React.FC<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sendRequest = useForm('login');

  const handleFormInfo = (type: string, value: string) => {
    if (type === 'Email') {
      setEmail(value);
    } else if (type === 'Password') {
      setPassword(value);
    }
  }

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const payload = { email, password };
    const requestResult = sendRequest(payload);
    requestResult.then((res: AxiosResponse) => {
      if (res) {
        alert('Successfully logged.');
        props.goToDashboard();
      } else {
        alert('Invalid credentials. User not found');
      }
    });
  }

  const changeToRegisterComponent = (event: React.MouseEvent) => {
    event.preventDefault();
    props.controllerFunction();
  }

  return (
    <>
      <div className="auth_body">
        <div className="auth_header">
          <span className="auth_logo"> G </span>
          <h2 className="auth_string"> Log-in </h2>
          <span className="auth_string auth_subtext"> Log with your user credentials, using your email and password. </span>
        </div>
        <form className="login_form" onSubmit={(e) => onFormSubmit(e)}>|
          <InputComponent label='Email' type='text' inputController={(type: string, value: string) => handleFormInfo(type, value)} />
          <InputComponent label='Password' type='password' inputController={(type: string, value: string) => handleFormInfo(type, value)} />
          <CheckboxComponent text='Remember me' label={null} inputController={(type: string, value: string) => handleFormInfo(type, value)} />
          <InputComponent type='submit' label={null} inputController={null} />
        </form>
        <span className="auth_footer_text"> New here? Open your task managing account! <a className="auth_footer_redirect" onClick={(e) => changeToRegisterComponent(e)}> Register here  </a> </span>
      </div>
    </>
  )
}

export default LoginComponent;