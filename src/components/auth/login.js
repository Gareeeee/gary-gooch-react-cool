import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.state= {
            email: "",
            password: "",
            errorText: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        axios.post("https://api.devcamp.space/sessions",{
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
            { withCredentials: true}
        ).then(response =>{
            console.log("response", response);
        }).catch(error => {});
        
        event.preventDefault();
    }
    handleChange(event) {        
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        return (
            <div>
                <h1>Login to Access Your Dashboard</h1>

            <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>
                    <input type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />

                    <input type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">LOGIN!</button>
                    </div>
                </form>
            </div>
        );
    }
}