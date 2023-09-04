import React from 'react'

const ErrorModalComponent = (props) => {
  return (
    <>
        <div> ⚠️ {props.errorText} </div>
    </>
  )
}

export default ErrorModalComponent;
