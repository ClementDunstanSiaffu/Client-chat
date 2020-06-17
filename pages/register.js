
import React from 'react';
import Head from 'next/head';
import {Container,Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

function Register(){

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
       <div className = "outer-container-reg">
       <form action = "https://shielded-forest-44594.herokuapp.com/users" method = "POST" className = "inner-container-reg">
               <div className = "inner-container1"> 
                <input type = "text" name = "name" placeholder ="enter your name"
                className = "input-border-reg" autoComplete = "off" />
                </div>
                <div className = "inner-container1">
                <input type = "text" name = "email" placeholder ="enter your email"
                className = "input-border-reg" autoComplete = "off" />
                </div>
                <div className = "inner-container1">
                <input type = "password" name = "password" placeholder ="Enter password"
                className = "input-border-reg" />
                </div>
                <div className = "inner-container1">
                 
                <label for="examplePassword"  className = "input-border-reg-label">Choose a topic</label>
                <Input type="select" name="topic" id="examplePassword" placeholder="choose a barber" 
                style = {{border:"collapse"}}>
                <option className="option-reg">Education</option>
                <option className="option-reg">Games</option>
                <option className="option-reg">Love</option>
                <option className="option-reg">Music</option>
                <option className="option-reg">Sports</option>
                
                </Input>
                
                
                </div>
                <div className = "container-log">
                <button type = "submit"  className = "button-log" >Register</button>
                </div>
       </form>
       </div>
        </div>
        </div>
        </div>
    )

}

export default Register;