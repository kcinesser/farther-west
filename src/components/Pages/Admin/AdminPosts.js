import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

export default class AdminPosts extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/posts').then(res => {
      this.setState({ posts: res.data })
    })
  }

  renderPostsTable = () => {
    return this.state.posts.map((post, id) => {
      return (
        <div key={id} className="admin-table__item admin-table__item--posts">
          <div>{post.title}</div>
          <div>{post.excerpt}</div>
          <div><Moment format="MM/DD/YY" date={post.date} /></div>
          <div><Moment format="MM/DD/YY" date={post.edit} /></div>
          <div>{post.status}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="admin-header">
          <h2>Posts</h2>
          <button>Add New</button>
        </div>
        <div className="admin-table__header admin-table__header--posts">
          <div>Title</div>
          <div>Excerpt</div>
          <div>Published Date</div>
          <div>Last Edited</div>
          <div>Status</div>
        </div>
        <div className="admin-table">
          {this.renderPostsTable()}
        </div>
      </div>
    )
  }
}