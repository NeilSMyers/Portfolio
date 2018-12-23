import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

class PortfolioContainer extends Component {
  constructor() {
    super()
  }

  portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe"]

    return data.map((item, index) => {
      return <PortfolioItem key={index}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio Items</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
