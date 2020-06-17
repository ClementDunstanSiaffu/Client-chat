

import React from 'react';
import Box from '@material-ui/core/Box';

function Messages({name,message,data1,room,id}){
 
 var trimmedRoom
 if(room){
    trimmedRoom = room.trim().toLowerCase(); 
 } else{
    trimmedRoom =""
 }  
var trimmedName
if(name){
  trimmedName = name.trim().toLowerCase();
}else{
    trimmedName = ""
}
 

 let isSavedMessage = false
 const savedUser = data1.filter((data2)=>data2.room === trimmedRoom)
 savedUser.map((eachUser)=>{if(eachUser.name === trimmedName){
     isSavedMessage = true
 }
})

const nameMessage = savedUser.filter((oneMessage)=>oneMessage.name === trimmedName)
console.log(nameMessage)

console.log(savedUser)
const otherUser = savedUser.filter((oneUser)=>oneUser.name === !trimmedName)
console.log(otherUser)

let isSentByCurrentUser = false;
//var trimmedName = name.trim().toLowerCase();
console.log(trimmedName)
/*if(message.user === trimmedName){
    isSentByCurrentUser = true;
}*/
let thatName = ""
console.log(id)
if(message.id ===id){
    isSentByCurrentUser = true;
    thatName=message.user
}


console.log(data1)

 return(
         
   




     isSentByCurrentUser  ?  ( 

            <Box  display= "flex" flexDirection="row-reverse"  style = {{minHeight:40,paddingRight:10,marginBottom:10}}  >
            <div className = "first-outer-message-box">
            <div className = "inner-message-box" >
             <div className = "first-inner-box"><p className = "for-name-grey">{thatName}</p></div>
             <div className = "second-inner-box"><p className = "for-text-grey">{message.text}</p></div>
             </div>
            </div>
             </Box>

      ):
          (
           
           <Box  display= "flex" flexDirection="row"  style = {{minHeight:40,paddingLeft:10,marginBottom:10,marginTop:20}}  >
            <div className = "second-outer-message-box">
             <div className = "first-inner-box"><p className = "for-name">{message.user}</p></div>
           <div className = "second-inner-box"><p className = "for-text">{message.text}</p></div>
            </div>
            </Box> 
       ) 

       
       
  
           
 )
}

export default Messages;