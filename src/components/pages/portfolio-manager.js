import React, { Component } from 'react';
import axios from "axios"

import PortfolioSidebar from '../portfolio/portfolio-sidebar';
import PortfolioForm from '../portfolio/portfolio-form';

class PortfolioManager extends Component {
  constructor() {
    super()

    this.state = {
      portfolioItems: []
    }
  }

  handleSuccessfulFormSubmission = portfolioItem => {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
    })
  }

  handleFormSubmissionError = error => {
    console.log("form submit error", error)
  }

  getPortfolioItems = () => {
    axios.get("https://neilmyers.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { withCredentials: true })
    .then(response => {
      this.setState({
        portfolioItems: [...response.data.portfolio_items]
      })
    }).catch(error => {
      console.log("error in getPortfolioItems", error)
    })
  }

  componentDidMount() {
    this.getPortfolioItems()
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm 
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
          />
        </div>

        <div className="right-column">
          <PortfolioSidebar data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}

export default PortfolioManager;
