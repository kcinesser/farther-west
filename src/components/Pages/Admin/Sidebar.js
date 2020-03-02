import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/posts">Posts</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/events">Events</Link> 
        <Link to="/admin/pages">Pages</Link>
      </div>
    )
  }
}