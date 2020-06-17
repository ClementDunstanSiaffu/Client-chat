
import React from 'react';
//import logo from '../assets/images/video5.mp4';
import logo from '../video7.mp4';
import Head from 'next/head';
import Box from '@material-ui/core/Box';
function Facial(){

    return(
        <div >
       <Head>
           <title>Letdis</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
       </Head>
       <Box display= "flex" flexDirection="row-reverse" style={{position:"absolute",zIndex:10}}>
       <div className="top-button">
           <span><a href = "https://letdis.vercel.app/login">
            <button className="facial-buttons">login</button>
            </a></span>
            <span><a href = "https://letdis.vercel.app/register">
            <button className="facial-buttons">Register</button>
            </a></span>
          
       </div>
       </Box>
       <div className="facial-text">
           <p className = "chat-logo">letdis</p>
           <div className="inner-facial-text">
           <p className="facial-text-p">Join conversations with friends  and get exposure to the things you like</p>
          </div>
          </div>
         
        <div style={{overFlow:"hidden",height:625}} className ="back-facial">
       <video playsinline autoPlay loop muted width = "100%" height="100%" style={{paddingRight:0,objectFit: 'cover',opacity:0.8}}>
            <source src={logo} type = "video/mp4" />
          
       </video>
         </div>
       
         </div>
    )
}

export default Facial;