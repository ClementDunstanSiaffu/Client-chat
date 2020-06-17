
import React,{useEffect,useState} from 'react';
import {Button} from 'reactstrap';
import SendIcon from '@material-ui/icons/Send';

const  Input = ({message,sendMessage,setMessage}) => (

    <form >
    <textarea 
    type = "text"
    className = "input-chat"
    value={message}
    onChange = {(event) => setMessage(event.target.value)}
    onKeyPress = {event => event.key === 'enter' ? sendMessage(event) : null}
    cols="50"
    rows="50"
    style = {{overflow:"hidden",resize:"none",}}
    /> 
  <div className = "butt">
  <button className = "chat-butt" outline= "none" onClick= {(event) => sendMessage(event)}><SendIcon  style = {{color:'white',outline:"none"}}/></button>
 </div>
  {/*<input type = "button"
     value = "send" 
     onclick = {(event) => sendMessage(event)}
className = "chat-butt"  /> */}
</form>
)
   
    
    


export default Input;