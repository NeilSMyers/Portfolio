import React, { Component } from 'react';
import axios from "axios"

import PortfolioItem from './portfolio-item';

class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "welcome",
      isLoading: false,
      data: []
    }
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => item.category === filter)
    })
  }

  getPortfolioItems() {
    axios
      .get("https://neilmyers.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      console.log(item)
      return <PortfolioItem key={item.id} item={item}/>
    })
  }


  componentDidMount() {
    this.getPortfolioItems()
  }

  render() {
    if(this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div className="portfolio-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
        <button className="btn" onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
        <button className="btn" onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
        
        {this.portfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
