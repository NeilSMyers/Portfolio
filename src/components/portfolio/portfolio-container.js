import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "welcome",
      isLoading: false,
      data: [
        {title: "Quip", category: "eCommerce", slug: "quip"}, 
        {title: "Eventbrite", category: "Scheduling", slug: "eventbrite"}, 
        {title: "Ministry Safe", category: "Enterprise", slug: "ministry-safe"}
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
      return <PortfolioItem title={item.title} slug={item.slug} key={index}/>
    })
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "New Page Title"
    })
  }

  render() {
    if(this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2 onClick={() => this.handlePageTitleUpdate()}>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
        <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
        <button onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>

        {this.portfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
