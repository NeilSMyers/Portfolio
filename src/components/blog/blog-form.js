import React, { Component } from 'react';
import axios from "axios"

class BlogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      blog_status: ""
    }
  }

  buildForm = () => {
    let formData = new FormData()
    formData.append("portfolio_blog[title]", this.state.title)
    formData.append("portfolio_blog[blog_status]", this.state.blog_status)
    return formData
  }

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = event => {
    axios.post("https://neilmyers.devcamp.space/portfolio/portfolio_blogs", this.buildForm(), { withCredentials: true })
    .then(response => {
      this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog)

      this.setState({
        title: "",
        blog_status: ""
      })
    }).catch(error => {
      console.log("blog handleSubmit", error)
    })
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
          <input 
            type="text"
            onChange={this.handleChange}
            name="title"
            placeholder="Blog Title"
            value={this.state.title}
          />
          <input 
            type="text"
            onChange={this.handleChange}
            name="blog_status"
            placeholder="Status"
            value={this.state.blog_status}
          />
        </div>

        <button className="btn">Save</button>
      </form>
    );
  }
}

export default BlogForm;