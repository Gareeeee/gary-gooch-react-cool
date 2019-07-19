import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getPortfolioItems() {
    axios
      .get("https://garygooch.devcamp.space/portfolio/portfolio_items")
      .then(res => {
        
        this.setState({
            data: res.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return (
        <PortfolioItem key ={item.id}item={item} />
      );
    });
  }

  componentDidMount() {
      this.getPortfolioItems();
  }
  
  render() {
    

    return (
      <div className='homepage-wrapper'>
        <div className='filter-links'><button className="btn" onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>
        <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
        all
        </button></div>
      <div className="PortfolioItemsWrapper">

        
        {this.portfolioItems()}        </div>
        </div>
    );
  }
}