import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Nav({Reset}){ 
    const Load=()=>{
        Reset();
    }
   
    return(
       
        
        <header className="t46" >
            <Link to="/react-app/" id="t47">Home</Link>
            <Link to="/react-app/Temp" id="t47">Templates</Link>
            <Link to="/react-app/About" id="t47">About</Link>
            
            
        </header>
     
           
     
    )
};
export default Nav
