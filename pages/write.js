
import React from 'react';
import Head from 'next/head';
import {Container} from 'reactstrap';

function Write(){

  return(
      <div>
        
          <Head>
           <title>IchajiAkili</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
       </Head>
        <div>
         <Container>
           <div className = "outer-container-write">
            <div className = "write-container" >
              <form >
             <div className = "write-content">
             <span className = "write-canc">Cancel</span>
             <span className = "outer-write-butt"><input type = "submit" value = "Andika" className = "write-butt" /></span>
             </div>
            
            
             
             <div className = "identity-write">Name</div>
           <input type = "text" placeholder = "Nini kinatokea?" className = "input-write"/>
              </form>
            </div>
            </div> 
        </Container>   
        </div> 
      </div>
  )
}

export default Write;