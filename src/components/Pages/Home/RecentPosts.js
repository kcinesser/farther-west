import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default class RecentPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    let numPosts = this.props.numPosts || '12';

    axios.get('http://localhost:5000/api/posts?count=' + numPosts).then(res => {
      this.setState({ posts: res.data, loading: false })
    }).catch(err => console.log(err));

  }

  renderPosts = () => {
    let posts = this.state.posts;

    return posts.map(post => {
      return (
        <Link to={'/post/' + post._id} className="card card--news" key={post._id}>
          <div className="news__image overlay" style={{ backgroundImage: 'url(' + post.featuredImage + ')' }}></div>
          <div className="card--news__content">
            <p className="news__title">{post.title}</p>
            <p className="news__date"><Moment format="MM/DD/YY" date={post.date} /></p>
            <p className="news__excerpt">{post.excerpt}</p>
          </div>
        </Link>
      )
    })
  }

  render() {
    if(this.state.loading) {
      return <div>Loading</div>
    }

    return (
      <div className="container">
        <div className="subhead-link">
          <h2>Latest Posts</h2>
          { this.props.showLink ? <Link to="/posts">See All Posts</Link> : '' }
        </div>
        <div className="card-row">
          <div className={ "card-row__container" + (this.props.index ? " index" : '') }>
            {this.renderPosts()}
          </div>
        </div>
      </div>
    )
  }
}