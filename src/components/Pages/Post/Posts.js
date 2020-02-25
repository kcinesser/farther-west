import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

import RecentPosts from '../Home/RecentPosts';

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

  render() {
    if(this.state.loading) {
      return <div>Loading</div>
    }

    return (
      <div>
        <Navbar pageClass="nav--internal" />
        <div className="hero hero--internal overlay">
          <div className="hero__content">
            <div className="container">
              <h1>Posts</h1>
            </div>
          </div>
        </div>
        <RecentPosts showLink={false} index={true} />
        <Footer />
      </div>    
    )
  }
}