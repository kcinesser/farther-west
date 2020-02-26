import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default class RecentPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true,
      offsetValue: 0,
      offsetIndex: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/posts?count=' + 8).then(res => {
      this.setState({ posts: res.data, loading: false })
    }).catch(err => console.log(err));

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

  handleSlider = (val) => {
    let offset = this.state.offsetValue + (val * 25);

    this.setState({ offsetValue: offset, offsetIndex: this.state.offsetIndex + val });
  }

  render() {
    if(this.state.loading) {
      return <div>Loading</div>
    }

    return (
      <div className="container">
        <div className="subhead-link">
          <h2>Latest Posts</h2>
          <Link to="/posts">See All Posts</Link>
        </div>
        <div className="slider-row">
          <div className="slider-row__container" style={{ transform: "translateX(" + this.state.offsetValue + "%)" }}>
            {this.renderPosts()}
          </div>
          { this.state.offsetIndex >= 0 ? '' :
            <div className="slider__buttons slider__buttons--left" onClick={() => this.handleSlider(1)}><i className="left"></i></div>
          }

          { this.state.offsetIndex <= -(this.state.posts.length - 4) ? '' : 
            <div className="slider__buttons slider__buttons--right" onClick={() => this.handleSlider(-1)}><i className="right"></i></div>
          }
        </div>
      </div>
    )
  }
}