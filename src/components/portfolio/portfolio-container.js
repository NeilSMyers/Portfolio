import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "welcome",
      data: [
        {title: "Quip", category: "eCommerce"}, 
        {title: "Eventbrite", category: "Scheduling"}, 
        {title: "Ministry Safe", category: "Enterprise"}
      ]
    }
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => item.category === filter)
    })
  }

  portfolioItems() {
    return this.state.data.map((item, index) => {
      return <PortfolioItem title={item.title} key={index}/>
    })
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "New Page Title"
    })
  }

  render() {
    return (
      <div>
        <h2 onClick={() => this.handlePageTitleUpdate()}>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
        <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
        <button onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>

        <h2>Portfolio Items</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
