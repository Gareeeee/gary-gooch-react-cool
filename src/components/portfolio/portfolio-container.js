import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state ={
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "PC 360", category: "I.T."}, 
                {title: "Advantage Drywall and Acoustics", category: "Drywall"}, 
                {title: "SS Auto Brokers", category: "Cars"},
                ],

        };
    }

    handleFilter(filter){
        this.handleFilter = this.handleFilter.bind(this);
        this.setState({
            data: this.state.data.filter(item=>{
                return item.category
            })
        });
    }

    PortfolioItems(){
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"}/>;
        });
    }
    
    handlePageTitleUpdate(){
        this.setState({
            pageTitle: "literally something else"
        });
    }
    render(){
        if(this.state.isLoading){
            return <div>Loading...</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter('I.T.')}>I.T.</button>
                <button onClick={() => this.handleFilter('Drywall')}>Drywall</button>
                <button onClick={() => this.handleFilter('Cars')}>Cars</button>
                
                {this.PortfolioItems()}
                <hr/>
                <button onClick={this.handlePageTitleUpdate}> Change Title</button>
            </div>
        );
    }
}