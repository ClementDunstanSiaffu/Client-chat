


import React,{useEffect,useState} from 'react';
import Head from 'next/head';
import {Container,Row,Col, Input} from 'reactstrap';
import Scrollbar from  'react-scrollbars-custom';
import Link from 'next/link';

function Profile({name,room,id,name1,room1,setName1,setRoom1}){
const[bio,setBio]=useState("")
const[name2,setName2]=useState("")
console.log(bio)
const bio2 = []
if(bio===""){
    bio2.push("hey there,I'm using this app")
}else{
   //bio2.splice(0,1)
   bio2.push(bio)
}
console.log(bio2[0])
console.log(bio2)
var divide = name.split(" ",2)
var res1 = divide[0].charAt(0);
var res2 = divide[1].charAt(0);
var res3 = res1.concat(" "+res2)
useEffect(()=>{
    setName2(res3)
})


    return(
     
        
           <div >
             
                
                
                 <h1 className = "friend-text">Profile</h1>     
                
                <Scrollbar  noScrollX = {true} 
                style = {{width:'100%',height:350,backgroundColor:"whitesmoke",marginTop:-10,}} 
                thumbMinSize={30} className = "content-friends-data">



        <div className = "outer-container-profile">
            <div className="outer-inner-container-profile">
             <div className="one-line">
             <div className = "picture-block">
             <p className="dp-text">{name2}</p>
             </div>
             <p className="name-profile">{name}</p>
            </div>
               
            
            <div  className = "inner-container-profile">

                <div className = "inner-container1-profile"> 
                <textarea type = "text" name = "name1" placeholder ="bio "
                className = "input-border-profile" autoComplete = "off" defaultValue ={bio2[0]}
                style = {{overflow:"hidden",resize:"none",}}
                cols="50"
                rows="2"
                maxlength="70"
                onKeyPress={(event)=>setBio(event.target.value)}/>
                </div>
              
              <p className="current-topic">Current topic : {room}</p>
              
                
                </div>
            </div>
        </div>
        

              
                 </Scrollbar>
                
                
                 
            </div>

    )
}



export default Profile;