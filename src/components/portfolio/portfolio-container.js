import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>Portfolio Items</h2>
        <PortfolioItem/>
      </div>
    );
  }
}

export default PortfolioContainer;
