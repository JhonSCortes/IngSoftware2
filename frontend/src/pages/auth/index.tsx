import RightBackgroundComponent from '../../components/auth/RightBackground';
import RegisterComponent from '../../components/auth/Register';
import LoginComponent from '../../components/auth/Login';
import { useState } from 'react';
import "./AuthPage.css";
import { useNavigate } from 'react-router-dom';

// React component to render other components and send the form to the API.
const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState(false);
  const navigateTo = useNavigate();

  function handleAuthComponents() {
    setAuthMethod(!authMethod);
  }

  function moveToDashboard() {
    navigateTo('/dashboard');
  }

  return (
    <>
      <div className='left-side-component'>
        {authMethod ? <RegisterComponent controllerFunction={handleAuthComponents} /> : <LoginComponent controllerFunction={handleAuthComponents} goToDashboard={moveToDashboard} />}
      </div>
      <RightBackgroundComponent image={authMethod} />
    </>
  )
}

export default AuthPage;
