import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    }
  }

  handleHover = () => {
    this.setState(prevState => ({
       hover: !prevState.hover 
    }))
  }

  render() {
    // nav--internal"\
    let match = this.props.location.pathname;

    return (
      <div className={"nav " + (this.state.hover ? " nav--dark " : '') + (match === '/' ? '' :  'nav--internal') } onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <div className="nav__container">
          <div className="nav__logo">
            <Link to ="/">
              <img src={this.state.hover ? "/logo-white.png" : "/logo-dark.png"} ></img>
            </Link>
          </div>
          <div className="nav__menu">
            <ul>
              <li><NavLink to="/store">Shop</NavLink></li>
              <li><NavLink to="/posts">Posts</NavLink></li>
              <li><NavLink to="/events">Events</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export const NavbarWithRouter = withRouter(Navbar);