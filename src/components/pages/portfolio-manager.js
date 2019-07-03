import React, { Component } from 'react';
import axios from 'axios';


export default class PortfolioManager extends Component{
    constructor(){
        super();
        this.state = {
            portfolioItems:[]
        }
    }

    getPortfolioItems(){
        axios.get("https://jordan.devcamp.space", {withCredentials: true}).then(resoponse =>{console.log('response from get portfolio items');
    }).catch(error=> {
    console.log('error in getPortfolioItems', error)})
    }
    componentDidMount(){
        this.getPortfolioItems()
    }
    render() {
        return(
            <div className="PortfolioManagerWrapper">               
             <div className='LeftColumn'>cool guy</div>
             <div className='RightColumn'> 

                    <div className='ContentWrapper'></div>

                    </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
        );
    }
}