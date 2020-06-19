

import React,{useEffect,useState} from 'react';
import Head from 'next/head';
import {Container,Row,Col} from 'reactstrap';
import Scrollbar from  'react-scrollbars-custom';


function Friends({friends}){
const take = (name)=>{
    var res3
    var divide = name.split(" ",2)
    if(divide.length===1){
        var res1 = divide[0].charAt(0)
        res3 = res1
    }else{
        var res1 = divide[0].charAt(0);
        var res2 = divide[1].charAt(0);
        res3 = res1.concat(" "+res2)
    }
    //var res1 = divide[0].charAt(0);
    //var res2 = divide[1].charAt(0);
    //var res3 = res1.concat(" "+res2)
    return res3
}

    return(
     
        
           <div >
             
                
                
                 <h1 className = "friend-text">Friends</h1>     
                
                <Scrollbar  noScrollX = {true} 
                style = {{width:'100%',height:350,backgroundColor:"whitesmoke",marginTop:-10,}} 
                thumbMinSize={30} className = "content-friends-data">
                 
                {friends.map((friend,i)=>friend.map((every)=>
                <div>
                <div className="friend-profile"><p className="each-name">{take(every.name)}</p></div>  
                <p className = "friend-friends">{every.name}</p>
                <p className="online-color">online</p>
                </div>))}
                 </Scrollbar>
                
                
                 
            </div>

    )
}



export default Friends;