import React, { Component } from 'react';
import loginImg from "../../../static/assets/auth/HDR-sunset.jpg";

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
                    <h1>Login Component Goes Here.</h1>
                </div>
            </div>
        );
    }
}