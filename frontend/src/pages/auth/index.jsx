import RightBackgroundComponent from '../../components/auth/RightBackground';
import RegisterComponent from '../../components/auth/Register';
import LoginComponent from '../../components/auth/Login';
import { useState } from 'react';
import "./AuthPage.css";

// React component to render other components and send the form to the API.
const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState(false);

  function handleAuthComponents () {
    setAuthMethod(!authMethod);
  }

  return (
    <>
      <div className='flex-container'>
        <div className='left-side-component'>
          { authMethod? <RegisterComponent controllerFunction={handleAuthComponents} /> : <LoginComponent controllerFunction={handleAuthComponents} /> }
        </div>
        <RightBackgroundComponent image={authMethod} />
      </div>
    </>
  )
}

export default AuthPage;
