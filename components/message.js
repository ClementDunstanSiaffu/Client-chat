
import React,{useState} from 'react';
import Messages from './messages';

const Message = ({name,messages,data1,room,id})=>{
    return(
        <div>
         {messages.map((message,i)=><div key = {i}><Messages message ={message} name = {name}
          data1 = {data1} room = {room} id = {id} /></div>)}
       </div>
    )

}


  /* const user = messages.map((message)=> message.user)
   console.log(user)
   let isSentByCurrentUser
   const trimmedName = name.trim().toLowerCase();
   console.log(trimmedName)
   for(var i=0; i < user.length; i++){
    if(user[i] === trimmedName){
       isSentByCurrentUser = true;
} else {
    isSentByCurrentUser = false;
}}
    
  
 console.log(isSentByCurrentUser)*/
    
           /* isSentByCurrentUser ?(
            <div>
            {messages.map((message)=>(
               <div className = "first-outer-message-box">
               <div className = "first-inner-box"><p className = "for-name-grey">{trimmedName}</p></div>
              <div className = "second-inner-box"><p>{message.text}</p></div>
            </div>
            ))}
             </div>
           
            
         ):(
          <div>
              {messages.map((message)=>(
            <div className = "second-outer-message-box">
            <div className = "first-inner-box"><p className = "for-name">{message.user}</p></div>
            <div className = "second-inner-box"><p>{message.text}</p></div>
           </div>
              ))}
         
         </div>) */
            
    
    
            
        
        
        
   


export default Message;