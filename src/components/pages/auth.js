import React, { Component } from 'react';
import loginImg from "../../../static/assets/auth/HDR-sunset.jpg";
import Login from "../auth/login";

export default class Auth extends Component{
    render() {
        return (
            <div className="AuthPageWrapper">
                <div className="LeftColumn"
                style={{
                    backgroundImage: `url(${loginImg})`
                    
                }}
                />

                <div className="RightColumn">
                <Login />
                </div>
            </div>
        );
    }
}