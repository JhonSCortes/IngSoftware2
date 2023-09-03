import "./RegisterComponent.css";

// RegisterComponent with Forms Controller.
const RegisterComponent = (props) => {

  const changeToLoginComponent = (event) => {
    event.preventDefault();
    props.controllerFunction();
  }

  return (
    <>
      RegisterComponent
      <span className="footer_text"> Do you have an account? <a className="footer_redirect" onClick={(e) => changeToLoginComponent(e)}> Log in here!  </a> </span>
    </>
  )
}

export default RegisterComponent;
