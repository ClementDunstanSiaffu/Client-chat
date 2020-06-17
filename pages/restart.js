
import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import decodeUriComponent from 'decode-uri-component';
import Link from 'next/link';
import Head from 'next/head';
import {Container,Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

function Restart({locationbar}){
const[name1,setName1]=useState('')
const[room1,setRoom1]=useState('')
const[id,setId]=useState('')

let name2 =""
let room2 = ""
useEffect(()=>{
    const okay3 = queryString.parse(location.search)
    console.log(okay3)
    name2 = okay3.name
    room2 = okay3.room
    console.log(name2)
    setId(okay3.id)
})
console.log(name2)

const handleEve = (event)=>{
  if(name1===""){
      setName1(name2)
  }else{
      setName1(event.target.value)
  }
}

const handleRoom = (event)=>{
    if(room1===""){
        setName1(room2)
    }else{
        setRoom1(event.target.value)
    }
  }


    return(
        <div>
            <Head>
            <title>Letdis</title>
               <meta charSet="utf-8" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <meta name="theme-color" content="#000000" />
            </Head>

            <div 
             style={{
              backgroundImage: "url(" + require("../assets/images/image2.jpg") + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'noRepeat',
              marginTop:-10,
              minHeight: 635,
                  }}>
        <div className = "outer-outer-container-reg">
       <div className = "outer-container-res">
       <form action = {`http://localhost:3000/chat?&id=${id}`} className = "inner-container-reg">
               <div className = "inner-container1"> 
                <input type = "text" name = "name" placeholder ="enter your name"
                className = "input-border-reg" autoComplete = "off" />
                </div>
                <div className = "all-edit">
                <div className = "inner-container2"> 
                <input type = "text" name = "id" placeholder ="enter your name" value = {id}
                className = "input-border-reg" autoComplete = "off" />
                </div>
                
                <div className = "inner-container1">
                 <label for="examplePassword"  className = "input-border-reg-label">Choose a topic</label>
                <Input type="select" name="room" id="examplePassword" placeholder="choose a barber"
                  
              >
                <option>Education</option>
                <option>Games</option>
                <option>Love</option>
                <option>Music</option>
                <option>Sports</option>
                
                </Input>
                
                </div>
                </div>
                <div className = "container-log">
                
                <button type = "submit"  className = "button-log"  >Edit</button>
               
                </div>
       </form>
       </div>
        </div>
        </div>
        </div>
    )
}

export default Restart;