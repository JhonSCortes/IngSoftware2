import React, { useState } from "react";
import "./LoggedModal.css";

const LoggedModalComponent = (props) => {
  const [animationVisible, setAnimationVisible] = useState(true);

  const restartAnimation = () => {
    setAnimationVisible(false);
    setTimeout(() => {
      setAnimationVisible(true);
    }, 10);
  };

  return (
    <>
      <div className="notifications-container">
        <div className="success">
          <div className="flex">
            <div className="success-prompt-wrap">
              <p className="success-prompt-heading">User {props.user} Succesfully Logged</p>
              <div className="success-prompt-prompt"></div>
            </div>
          </div>
          
        <div className="alert-popup-container">
          <div className="success-checkmark">
            <div className="check-icon">
              <span className="icon-line line-tip" />
              <span className="icon-line line-long" />
              <div className="icon-circle" />
              <div className="icon-fix" />
            </div>
          </div>
        </div>
        </div>
      </div>

      <></>
    </>
  );
};

export default LoggedModalComponent;
