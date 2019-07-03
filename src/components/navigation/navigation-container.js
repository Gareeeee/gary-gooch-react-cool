import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationComponent = (props) =>{
    const dynamicLink = (route, linkText) =>{
        return(<div className="NavLink"> 
        <NavLink  to="/blog" activeClassName="nav-link-active">Blog</NavLink>
        </div>)
    }
    
        return(
            <div className="NavWrapper">
             <div className="LeftSide">  
             <div className="NavLink"> 
            <NavLink exact to="/"activeClassName="nav-link-active">Home</NavLink>
            </div>
            <div className="NavLink"> 

            <NavLink  to="/about-me"activeClassName="nav-link-active">About Me</NavLink>
            </div>
            <div className="NavLink"> 
            <NavLink  to="/contact" activeClassName="nav-link-active">Contact</NavLink>
            </div>
            {props.loggedInStatus === "LOGGED_IN" ?  dynamicLink("/blog", "Blog"): null}


            </div>


            <div className="RightSide">Gary Gooch</div>


            
                {false ? <button>Add Blog</button> : ''}
            </div>
        )
    }
export default NavigationComponent