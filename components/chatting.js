

import React,{useState} from 'react';
import Message from './message';
import Input from './input';
import Scrollbar from  'react-scrollbars-custom';
function Chatting({room,name,messages,sendMessage,setMessage,message,data1,id}){

    return(
     
        <div>
             <h3 className = "incoming-text">{room}</h3>
             <Scrollbar  
        style={{
        Width:'100%',
        height:339,
        backgroundColor:"whitesmoke",
        marginTop:-20,
        }}
        noScrollX = {true}   className = "scroll-chat" thumbMinSize={30}>
        <Message  name = {name}  messages ={messages} data1 = {data1} room = {room} id = {id}/> 
         
        </Scrollbar>
      
        <Input sendMessage = {sendMessage} message = {message}  setMessage = {setMessage}/> 
        {/*<Input   /> */}
        
        </div>
    )
    
}

export default Chatting;