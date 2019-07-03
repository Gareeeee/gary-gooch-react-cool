import React, { Component } from 'react';
import loginImg from "../../../static/assets/auth/HDR-sunset.jpg";
import Login from "../auth/login";

export default class Auth extends Component{
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
    }
    
    handleSuccessfulAuth(){
        this.props.handleSuccessfulLogin();
        this.props.history.push('/');
    }
    handleUnSuccessfulAuth(){
        this.props.handleUnSuccessfulLogin();
    }
    
    render() {
        return (
            <div className="AuthPageWrapper">
                <div className="LeftColumn"
                style={{
                    backgroundImage: `url(${loginImg})`
                    
                }}
                />

                <div className="RightColumn">
                <Login 
                handleSuccessfulAuth={this.handleSuccessfulAuth}
                handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}

                
                
                />
                </div>
            </div>
        );
    }
}