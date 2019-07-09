import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationComponent = (props) =>{
    const dynamicLink = (route, linkText) =>{
        return(<div className="NavLink"> 
        <NavLink  to={route} activeClassName="nav-link-active">{linkText}</NavLink>
        </div>)
    }
    const handleSignOut = () => {
        axios
          .delete("https://api.devcamp.space/logout", { withCredentials: true })
          .then(response => {
            if (response.status === 200) {
              props.history.push("/");
              props.handleSuccessfulLogout();
            }
            return response.data;
          })
          .catch(error => {
            console.log("Error signing out", error);
          });
      };
    

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
            <div className="NavLink"> 
            <NavLink  to="/blog" activeClassName="nav-link-active">Blog</NavLink>
            </div>
            {props.loggedInStatus === "LOGGED_IN" ?  dynamicLink("/portfolio-manager", "Portfolio Manager"): null}


            </div>


            <div className="RightSide">
                Gary Gooch 



            {props.loggedInStatus ==='LOGGED_IN'?<a onClick={handleSignOut}>
              <FontAwesomeIcon icon='sign-out-alt'/></a> : null}
            </div>


            
                {false ? <button>Add Blog</button> : ''}
            </div>
        )
    }
export default withRouter(NavigationComponent);