import React from 'react';
import Head from 'next/head';

function Login(){

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
              backgroundImage: "url(" + require("../assets/images/image1.jpg") + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'noRepeat',
              marginTop:-10,
              minHeight: 635,
                  }}>
                      
        <div className = "outer-outer-login-container">
        <div className = "outer-container">
            <form action = "https://shielded-forest-44594.herokuapp.com/user" method="POST" className = "inner-container">

                <div className = "inner-container1"> 
                <input type = "text" name = "email" placeholder ="enter your email "
                className = "input-border" autoComplete = "off" />
                </div>
                <div className = "inner-container1">
                <input type = "password" name = "password" placeholder ="enter your password"
                className = "input-border" />
                </div>
                <div className = "container-log">
                <button type = "submit"  className = "button-log" >login</button>
                </div>
              
            </form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Login;