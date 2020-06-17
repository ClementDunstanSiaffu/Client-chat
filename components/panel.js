

import React from 'react';
import Chatting from './chatting';
import Friends from './friends';
import Profile from './profile';

function Panel({value,room,messages,name,message,
           setMessage,sendMessage,data1,id,friends,
           room1,name1,setRoom1,setName1
}){

    return(
        <div>
        {value === 0 ? <Chatting room = {room} name = {name} messages = {messages} message = {message} 
        setMessage = {setMessage} sendMessage = {sendMessage} data1 = {data1} id={id}/> : (value === 1 ?
         <Friends friends = {friends} /> :<Profile name = {name} room = {room} id = {id} name1={name1}
         room1={room1} setRoom1={setRoom1} setName1={setName1}/>)}
        </div>
    )
}

export default Panel;