import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

class Blog extends Component {
  constructor() {
    super()

    this.state = {
      blogItems: []
    }
  }

  componentWillMount() {
    this.getBlogItems()
  }

  getBlogItems = () => {
    axios.get("https://neilmyers.devcamp.space/portfolio/portfolio_blogs", { withCredentials: true })
    .then(response => {
      this.setState({
        blogItems: response.data.portfolio_blogs
      })
    }).catch(error => {
      console.log("getBlogItems", error)
    })
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <h1>{blogItem.title}</h1>
    })

    return (
      <div>
        <h2>Blog</h2>
        <div>{blogRecords}</div>
        
      </div>
    );
  }
}

export default Blog