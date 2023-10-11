import { useNavigate } from 'react-router-dom';
import { ComponentInputProps } from '../../../interfaces/components';
import './InputComponent.css';

const InputComponent: React.FC<ComponentInputProps> = (props) => {
  const navigateTo = useNavigate();

  const showForgotPassword = () => {
    if (props.label === 'Password') {
      return true
    } else {
      return false
    }
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.label && props.inputController) {
      props.inputController(props.label, event.target.value);
    }
  }

  return (
    <>
      <label className='input_label'> {props.label ? props.label : ''} <a className={showForgotPassword() ? 'password_redirect' : ''} onClick={() => navigateTo('forgot-password')}> {showForgotPassword() ? 'Forgot password?' : ''} </a> </label>
      <input className={props.label ? 'input_field' : 'input_submit'} type={props.type} onChange={(e) => onInputChange(e)} required />
    </>
  )
}

export default InputComponent;
