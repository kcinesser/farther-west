import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      loading: true
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params;

    console.log(id)
    
    axios.get('http://localhost:5000/api/posts/').then(res => {
      this.setState({ posts: res.data, loading: false })}).catch(err => console.log(err));
  }

  renderPosts = () => {
    let posts = this.state.posts;

    return posts.map(post => {
      return (
        <Link to={'/post/' + post._id} className="card card--news overlay" key={post._id}>
          <div className="news__image" style={{ backgroundImage: 'url(' + post.featuredImage + ')' }}>
            <div className="card--news__content">
              <p className="news__title">{post.title}</p>
              <p className="news__date"><Moment format="MM/DD/YY" date={post.date} /></p>
              <p className="news__excerpt">{post.excerpt}</p>
            </div>
          </div>
        </Link>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="hero hero--internal overlay">
          <div className="hero__content">
            <div className="container">
              <h1>Posts</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="subhead-link">
            <h2>Latest Posts</h2>
          </div>
          <div className="card-row">
            <div className="card-row__container index" >
              { this.state.loading ? <div>Loading</div> : this.renderPosts() } 
            </div>
          </div>
        </div>
      </div>    
    )
  }
}