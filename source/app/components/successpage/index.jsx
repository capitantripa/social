import React from 'react';
import Success from '../success/index.jsx';
import style from './style.css';


function SuccessPageInt (props){
  return (
    <div className={style.content}>
      {props.title && (
        <div className={style.title}>{props.title}</div>
      )}
      <Success />
    </div>
  )
}

export default SuccessPageInt;
