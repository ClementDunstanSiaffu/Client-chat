
import React,{useState} from 'react';
import classnames from 'classnames';
import Collapse from 'react-bootstrap/Collapse';

function Side({id,name,room}){

    const[navbarCollapse,setNavbarCollapse] = useState(false)

    const toggleNavbarCollapse = ()=>{
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    }



    return(
        <div className = "outer-side-container">
            
            <button  aria-expanded={navbarCollapse}
             aria-controls="example-collapse-text"
              className= "side-butt"
              
                  onClick={toggleNavbarCollapse}>
                <div className = 'all-dot'>
                  <div className = "dot-1"></div>
                  <div className = "dot-2"></div>
                  <div className = "dot-3"></div>
                  </div>
              </button>
            <Collapse  in ={navbarCollapse}>
          <div className = "add-container" id = "example-collapse-text">
            
          <a href =  {`https://letdis.vercel.app/restart?name=${name}&room=${room}&id=${id}`} className ="logout">
              <div className = "profile"> Setting</div>
          </a>
              {/*<a href =  {`http://localhost:8080/ondoa?id=${id}`} className ="logout">log out</a>*/}
              <form action="https://shielded-forest-44594.herokuapp.com/ondoa" method = "POST" className = "profile-form">
               <input type="text" value={id} name="id" className="form-profile"/>
               <button className ="logout">logout</button>
             </form>
                            
          </div>
          </Collapse>
        </div>
       
    )
}

export default Side;