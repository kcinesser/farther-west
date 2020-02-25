import React, {  Component } from 'react';
import axios from 'axios';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null,
      loading: true
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params;

    console.log(id)
    
    axios.get('http://localhost:5000/api/posts/' + id).then(res => {
      this.setState({ post: res.data, loading: false })}).catch(err => console.log(err));
  }

  render() {
    if(this.state.loading) {
      return <div>Loading</div>
    }

    let post = this.state.post;

    return (
      <div className="post">
        <Navbar pageClass="nav--internal" />
        <div className="hero hero--internal overlay">
          <div className="hero__content">
            <div className="container">
              <h1>{post.title}</h1>
            </div>
          </div>
        </div>
        <div className="container container--post">
          <div className="post__fimage" style={{ backgroundImage: 'url(' + post.featuredImage + ')' }}></div>
          <div className="post__body">
            <p>{post.body}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}