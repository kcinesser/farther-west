import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <div className="footer__logo">
          <img src="/logo-white.png" ></img>
          <div className="social-icons">
            <i className="instagram"></i>
            <i className="facebook"></i>
            <i className="twitter"></i>
          </div>
        </div>
        <div className="footer__links">
          <ul>
            <li>Shop</li>
            <li>Posts</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
    )
  }
}