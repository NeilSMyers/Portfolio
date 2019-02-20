import React, { Component } from 'react';
import axios from "axios"

class BlogDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {}
    }
  }

  getBlogItem = () => {
    axios.get(`https://neilmyers.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
    .then(response => {

    }).catch( error => {
      console.log("getBlogItem", error)
    })
  }

  componentDidMount() {
    this.getBlogItem()
  }

  render() {
    return (
      <div>
        <h1>Blog Detail</h1>
      </div>
    );
  }
}

export default BlogDetail;
