import React,{useState} from 'react';
import './App.css';

function Message(props) {
  return (
        <h3>Value of count is : {props.counter}</h3>
  );
}

export default Message;
