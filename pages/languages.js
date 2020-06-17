
import React from 'react';
import Head from 'next/head';
import {Container,Row,Col,Button,Form} from 'reactstrap';
import Scrollbar from  'react-scrollbars-custom';

function Language(){

    return(

        <div>
           <Head>
            <title>Dolyrus saloon</title>
               <meta charSet="utf-8" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <meta name="theme-color" content="#000000" />
            </Head>
            <div>
            <Container>
            
            <div >
           
            <h3 className = "text-lang">Chagua lugha unayotaka kujifunza</h3>
            <form>
            <Scrollbar  noScrollX = {true} style = {{width:'65%',height:280,}}  className = "outer-container-lang" thumbMinSize={30}>
            
             
             <div className = "inner-container-lang">
               <Row >
               <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                <div className="round">
                  <input type="checkbox" id="checkbox" name = "tribe" value = "Kibondei"/>
                  <label for="checkbox" className = "lang-lab" >Kibondei</label>
                </div>
                </Col>
               <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                 <div className="round">
                  <input type="checkbox" id="checkbox1" name = "tribe" value = "Kichaga" />
                  <label for="checkbox1" className = "lang-lab">Kichaga</label>
                </div>
               </Col>
               <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                 <div className="round">
                  <input type="checkbox" id="checkbox2" name = "tribe" value = "Kidigo" />
                  <label for="checkbox2" className = "lang-lab">Kidigo</label>
                </div>
               </Col>
              <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox3" name = "tribe" value = "Kigogo" />
                  <label for="checkbox3" className = "lang-lab">Kigogo</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox4" name = "tribe" value = "Kihaya"/>
                  <label for="checkbox4" className = "lang-lab">Kihaya</label>
                </div>
                </Col>
                
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                 <div className="round">
                  <input type="checkbox" id="checkbox5" name = "tribe" value = "Kihehe"/>
                  <label for="checkbox5" className = "lang-lab">Kihehe</label>
                </div>
               </Col>
              <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox6" name = "tribe" value = "Kikinga"/>
                  <label for="checkbox6" className = "lang-lab">Kikinga</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox7" name = "tribe" value = "Kikurya" />
                  <label for="checkbox7" className = "lang-lab">Kikurya</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox8" name = "tribe" value = "Kilangi"/>
                  <label for="checkbox8" className = "lang-lab">Kilangi</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox9" name = "tribe" value = "Kimasai"/>
                  <label for="checkbox9" className = "lang-lab">Kimasai</label>
                </div>
                </Col>
                
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox10" name = "tribe" value = "Kimakonde"/>
                  <label for="checkbox10" className = "lang-lab">Kimakonde</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox11" name = "tribe" value = "Kimeru"/>
                  <label for="checkbox11" className = "lang-lab">Kimeru</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox12" name = "tribe" value = "Kinyalyusa"/>
                  <label for="checkbox12" className = "lang-lab">Kinyakyusa</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox13" name = "tribe" value = "Kinyamwezi"/>
                  <label for="checkbox13" className = "lang-lab">Kinyamwezi</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox14" name = "tribe" value = "Kinyambo"/>
                  <label for="checkbox14" className = "lang-lab">Kinyambo</label>
                </div>
                </Col>
              
               
               
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox15" name = "tribe" value = "Kinyasa"/>
                  <label for="checkbox15" className = "lang-lab">Kinyasa</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox16" name = "tribe" value = "Kipare"/>
                  <label for="checkbox16" className = "lang-lab">Kipare</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox17" name = "tribe" value = "Kiruguru" />
                  <label for="checkbox17" className = "lang-lab">Kiruguru</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox18" name = "tribe" value = "Kisambaa" />
                  <label for="checkbox18" className = "lang-lab">Kisambaa</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox19" name = "tribe" value = "Kisukuma"/>
                  <label for="checkbox19" className = "lang-lab">Kisukuma</label>
                </div>
                </Col>   
              

               
               <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox20" name = "tribe" value = "Kizigua"/>
                  <label for="checkbox20" className = "lang-lab">Kizigua</label>
                </div>
                </Col>
                <Col xs = "auto" style = {{paddingTop:20,paddingLeft:100,marginTop:40}}> 
                  <div className="round">
                  <input type="checkbox" id="checkbox21" name = "tribe" value = "Ndengeleko"/>
                  <label for="checkbox21" className = "lang-lab">Ndengeleko</label>
                </div>
                </Col>
                </Row>    
             
        
             </div>
            </Scrollbar>
            <div className = "container-butt-lang">
            <input type = "submit" value = "submit" className = "butt-lang" />
            </div>
            
             </form>
             </div>
            </Container>
        </div>
        </div>
    )

}

export default Language;