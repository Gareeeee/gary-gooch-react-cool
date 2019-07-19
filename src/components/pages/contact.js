import React, { Component } from 'react';
import loginImg from "../../../static/assets/auth/Shrek.png";
import ContactLeft from "../contact-left";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default class Contact extends Component{
        
    
    render() {
        return (
            <div className="AuthPageWrapper">
                <div className="LeftColumn"
                style={{
                    backgroundImage: `url(${loginImg})`
                    
                }}
                />

                <div className="RightColumn">
                    <div className="contact-bullet-points">
                        <div className='bullet-point-group'>
                            <div className='icon'><FontAwesomeIcon icon="baby"/></div>
                            <div className='text'>
                            866-978-7564
                            </div>                           
                            </div>
                            <div className='bullet-point-group'>
                            <div className='icon'><FontAwesomeIcon icon="bug"/></div>
                            <div className='text'>
                            johndoe99@gmail.com
                            </div>
                            </div>
                            <div className='bullet-point-group'>
                            <div className='icon'><FontAwesomeIcon icon="kiwi-bird"/></div>
                            <div className='text'>
                            not freaking here
                            </div>                       
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}