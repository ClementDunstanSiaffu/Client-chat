
import React,{useEffect} from 'react';
import Head from 'next/head';
import {Container} from 'reactstrap';

import Header from '../components/header';


function Moment(){

return(
   <div >
       <Head>
           <title>IchajiAkili</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
       </Head>
       < div className = "inner-back-moment">
           <Header />
           <div className = "side-content">
                 <div className = "side-content-data">Messages</div>
                 <div className = "side-content-data">Notification</div>
                 <div className = "side-content-data">About</div>
                 <div className = "side-content-data">Terms</div>
                 <div className = "side-content-data">Privacy</div>
                 <div className = "side-content-data">Settings</div>
                 <div className = "side-content-data">Log out</div>
             </div>
           <Container >
         
        
            <div className = "outer-outer-content-box">
                <div className = "outer-content-box">
                    <div className = "inner-content-box"></div>
                    <div className = "inner-inner-content-box"></div>
                </div>

                <div className = "outer-content-box">
                    <div className = "inner-content-box"></div>
                    <div className = "inner-inner-content-box"></div>
                </div>

                <div className = "outer-content-box">
                    <div className = "inner-content-box"></div>
                    <div className = "inner-inner-content-box"></div>
                </div>
            </div>
          
            
                
             


           </Container>
           </div>
   </div>
)

}

export default Moment;