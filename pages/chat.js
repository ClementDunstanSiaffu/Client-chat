

import React,{useEffect,useState} from 'react';
import Head from 'next/head';
import {Container} from 'reactstrap';
import jscookie from 'js-cookie';
import Panel from '../components/panel'
import io from 'socket.io-client';
import fetch from 'isomorphic-unfetch';
import Side from '../components/side';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import queryString from 'query-string';
import decodeUriComponent from 'decode-uri-component';

let socket; 

function Chat({data1,locationbar}){

 

const [room,setRoom] = useState('');
const [name,setName] = useState('');
const[message,setMessage] = useState('');
const[messages,setMessages] = useState([])
const[id,setId] = useState('')
const[value,setValue] = useState(0)
const[friends,setFriends] = useState([]);
const [name1,setName1] = useState("");
const [room1,setRoom1] = useState("")
//const [name2,setName2] = useState(name)
//const [room2,setRoom2] = useState(room)

/*const handleButton = (event)=>{
    event.preventDefault();
    setName2(event.target.value)
    console.log(name2)
    setRoom2(event.target.value)
}*/

const handleChange = (event,newValue)=>{
    setValue(newValue)
}

let spin = false;
if(name1){
    spin=true
}

let isData = false;
const ENDPOINT = "https://blooming-journey-09430.herokuapp.com/";

//let mimi = ""
let allAdmin = ""

/*data.map((info) =>{let mimi = {name:`${info.name}`,room:`${info.room}`,id:`${info.id}`}
jscookie.set('together',mimi)
console.log(mimi)
})*/


const getAdmin = messages.filter((message)=>message.user === 'admin')
getAdmin.map((oneAdmin)=>allAdmin = oneAdmin)
//console.log(allAdmin)

//const allTogether = {name:mimi.name,room:mimi.room,id:mimi.id}
//jscookie.set('together',allTogether)
//const getAll = jscookie.getJSON('together')
//console.log(getAll)

useEffect(() =>{

socket = io(ENDPOINT);

const okay = decodeUriComponent(location.search)
const okay2 = queryString.parse(okay)
console.log(okay)
console.log(okay2)
console.log(okay2.id)
setName(okay2.name);
setRoom(okay2.room);
setId(okay2.id)




//console.log(getAll)
//console.log(getAll.name)

socket.emit('join',{name:okay2.name,room:okay2.room,id:okay2.id})
  
    
  
  
    



//socket.emit('saved')



  

return () => {
  socket.emit('disconnect');
  socket.off();
}
},[ENDPOINT])

console.log(name1)


   // let ujumbe = {user:"",text:""}
   let trimmedRoom 
   if(room){
     trimmedRoom = room.trim().toLowerCase()
   }else{
       trimmedRoom = ""
   }
    
   const allSaved = data1.filter((savedUser)=>savedUser.room === trimmedRoom)
   //console.log(allSaved) 
    

 useEffect(()=>{
    allSaved.map((eachMessage)=>{
        let ujumbe = {user:`${eachMessage.name}`,text:`${eachMessage.message}`,id:`${eachMessage.ids}`}  
         let meme = ''
        if(allAdmin.user === 'admin' || (ujumbe.user === "" || ujumbe.text==="")){
            null
        }else{
            messages.push(ujumbe)
        }
         
        //setMessages([...messages,ujumbe])
         //console.log(ujumbe)
        //console.log(messages)
       
       //messages.pop(ujumbe)
  })
    
    
},[allSaved])




useEffect(() =>{
   // let ujumbe = {user:"",text:""}
  
    /*allSaved.map((eachName)=>ujumbe.user = eachName.name,
    console.log(ujumbe))*/
     //ujumbe.user = eachMessage.name
    //console.log(messages)
    //console.log(ujumbe.text)
    
    socket.on('message',(message)=>setMessages([...messages,message])) 

},[messages]) 

//console.log(messages)
 useEffect(()=>{
     socket.on('friends',(friend)=>setFriends([...friends,friend]))
 },[friends])  

const sendMessage = (event) =>{
      console.log(event)
       event.preventDefault();
       
       if(message){
           console.log(message)
           socket.emit("sendMessage",message,()=> setMessage(''))
       }
   }

  /* if(name){
       isData = true;
       console.log(name)
   } */

   const index = data.indexOf(id)
    console.log(index)

   if(index!==-1){
       isData = true
    }


  const removeUser = ()=>{
      mimi = {}
  }

return(
     
    isData ? (
    <div className = "outer-back-chat">
       <Head>
           <title>Letdis</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
       </Head>

         < div  style={{
              backgroundImage: "url(" + require("../assets/images/image3.jpg") + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'noRepeat',
              marginTop:-10,
              minHeight: 635,
              }} >
       
         <Container style = {{paddingTop:75}}>
         <div className = "outer-container-chat">
        <div className = "first-inner-container-chat">
         <div className = "side-container"><Side id = {id} room={room} name={name}/></div>
        </div>
        <Panel value = {value} name = {name} messages = {messages} room = {room} message = {message}
        setMessage = {setMessage} sendMessage = {sendMessage} data1 = {data1} 
        id = {id} friends = {friends} room1={room1} name1={name1} setRoom1={setRoom1} setName1={setName1}/>
        
        
        <div className = "second-inner-container-chat"> 
        <div className = "tab-container">
        <Tabs
             value={value}
             onChange = {handleChange}
             indicatorColor="primary"
             textColor="primary"
             centered
             TabIndicatorProps={{style: {backgroundColor: "white",outline:"none"}}}
            
        >
        <Tab label = "chat"  style={{outline:"none",marginTop:0,paddingRight:40,}} className="tab-chat" />
        <Tab label = "friends" style={{outline:"none",marginTop:0}}  className="tab-chat"/> 
        <Tab label = "profile" style={{outline:"none",marginTop:0,paddingLeft:40}}  className="tab-chat"/> 
        </Tabs>
        </div>
        
        </div> 
        </div>

         </Container>
       </div> 
    </div>):null
     
    )

}

Chat.getInitialProps = async () =>{
    //const response = await fetch('https://shielded-forest-44594.herokuapp.com/pata')
    const response1 = await fetch('https://blooming-journey-09430.herokuapp.com/ujumbe')
    //const data = await response.json();
    const data1 = await response1.json();
    //console.log(data);
    console.log(data1)
    return {data1}
    
}

/*Chat.getInitialProps = async () =>{
    const response1 = await fetch('http://localhost:5000/ujumbe')
    const data1 = await response1.json();
    console.log(data1)
    return {data1}
}*/

export default Chat;