import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavigationComponent extends Component{
    constructor(){
        super();
    }

    render(){
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

            </div>

            <div className="RightSide">Gary Gooch</div>


            
                {false ? <button>Add Blog</button> : ''}
            </div>
        )
    }
}