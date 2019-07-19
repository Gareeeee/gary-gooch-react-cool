import React, { Component } from 'react';

export default class ContactLeft extends Component{
   

    

    render() {
        return (
            <div>
                <h1>Login to Access Your Dashboard</h1>


                <form >
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