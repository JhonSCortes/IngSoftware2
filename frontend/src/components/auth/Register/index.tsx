import InputComponent from "../../html/Input";
import DoubleInputComponent from "../../html/DoubleInput";
import { useForm } from "../../../hooks/useForm";
import { AxiosResponse } from "axios";
import { useState } from "react";
import "./RegisterComponent.css";

interface Props {
  controllerFunction: () => void,
}

// RegisterComponent with Forms Controller.
const RegisterComponent: React.FC<Props> = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sendRequest = useForm('register');

  const handleFormInfo = (type: string, value: string) => {
    if (type === 'Email') {
      setEmail(value);
    } else if (type === 'Password ') {
      setPassword(value);
    } else if (type === 'Name') {
      setName(value)
    }
  }

  const changeToLoginComponent = (event: React.MouseEvent) => {
    event.preventDefault();
    props.controllerFunction();
  }

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const payload = { email, password, name };
    const requestResult = sendRequest(payload);
    requestResult.then((res: AxiosResponse) => {
      if (res) {
        alert("User created.");
      } else {
        alert("Invalid Fields, User could not be created.");
      }
    });
  }

  return (
    <>
      <div className="auth_body">
        <div className="auth_header">
          <span className="auth_logo"> G </span>
          <h2 className="auth_string"> Open a new account </h2>
          <span className="auth_string auth_subtext"> Create a new user providing an email address, first and last name along with a password to save, keep and secure your new account. </span>
        </div>
        <form className="login_form" onSubmit={(e) => onFormSubmit(e)}>
          <DoubleInputComponent label='Name' type='text' inputController={(type: string, value: string) => handleFormInfo(type, value)} />
          <InputComponent label='Email' type='text' inputController={(type: string, value: string) => handleFormInfo(type, value)} />
          <InputComponent label='Password ' type='password' inputController={(type: string, value: string) => handleFormInfo(type, value)} />
          <span className="terms_policy" > Creating an account means you have accepted and have read all Terms of Service & Privacy Policy. </span>
          <InputComponent type='submit' label={null} inputController={null} />
        </form>
        <span className="auth_footer_text"> Do you have an account? <a className="auth_footer_redirect" onClick={(e) => changeToLoginComponent(e)}> Log in here!  </a> </span>
      </div>
    </>
  )
}

export default RegisterComponent;
