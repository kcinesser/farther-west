import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  handleHover = () => {
    this.setState(prevState => ({
       hover: !prevState.hover 
    }))
  }

  render() {
    return (
      <div className={"nav " + (this.state.hover ? " nav--dark " : '') + this.props.pageClass } onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <div className="nav__container">
          <div className="nav__logo">
            <Link to ="/">
              <img src={this.state.hover ? "/logo-white.png" : "/logo-dark.png"} ></img>
            </Link>
          </div>
          <div className="nav__menu">
            <ul>
              <li><Link to="/store">Shop</Link></li>
              <li><a href="/posts">Posts</a></li>
              <li><a href="/events">Events</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}