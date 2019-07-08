import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list.js";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component{
    constructor(){
        super();
        this.state = {
            portfolioItems:[]
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);


    }

    handleSuccessfulFormSubmission(portfolioItem) {
        console.log('handleSuccessfulFormSubmission', portfolioItem);
    }

    handleFormSubmissionError(error) {
        this.setState({
            portfolioItems: [portfolioItem].contcat(this.state.portfolioItems)
        })
    }


    getPortfolioItems(){
        axios
        .get("https://garygooch.devcamp.space/portfolio/portfolio_items", {
            withCredentials: true
        })
            .then(response =>{
                this.setState({
                    portfolioItems:[...response.data.portfolio_items]
                });
            }).catch(error=> {
    console.log('error in getPortfolioItems', error);
        });
    }
    componentDidMount(){
        this.getPortfolioItems();
    }
    render() {
        return(
            <div className="PortfolioManagerWrapper">               
             <div className='LeftColumn'>
                <PortfolioForm 
                handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                handleFormSubmissionError={this.handleFormSubmissionError}
                
                />
             </div>
             <div className='RightColumn'> 
            <PortfolioSidebarList data={this.state.portfolioItems}/>
                    <div className='ContentWrapper'></div>

                    </div>
               

            </div>
        );
    }
}