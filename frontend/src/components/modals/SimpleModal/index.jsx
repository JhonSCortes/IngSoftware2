import React from 'react'
import './SimpleModalComponent.css';

const SimpleModalComponent = (props) => {
  return (
    <>
        <div className='simple_modal'>
            <span> {props.text} </span>
        </div>
    </>
  )
}

export default SimpleModalComponent;
