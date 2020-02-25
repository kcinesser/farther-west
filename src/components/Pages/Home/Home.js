import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';
import ModalGallery from '../../ModalGallery';
import RecentPosts from './RecentPosts';

export default class Home extends Component {
  render() {

    return (
      <div>
        <Navbar />
        <div className="hero overlay">
          <div className="hero__content">
            <div className="container">
              <h1>Prone to Wander</h1>
              <h3>Inspiring exploration.</h3>
              <img className="hero__icon" src="/wave.png"></img>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="subhead-link">
            <h2>Shop</h2>
            <Link to="/store">Shop All Categories</Link>
          </div>
          <div className="card-row">
            <div className="card-row__container">
              <Link to="/store?category=mens" className="card overlay" style={{ backgroundImage: 'url(/mens.jpg)'}}>
                <p className="card__title">Mens</p>
              </Link>
              <Link to="/store?category=wommens" className="card overlay" style={{ backgroundImage: 'url(/womens.jpg)'}}>
                <p className="card__title">Womens</p>
              </Link>
              <Link to="/store?category=prints" className="card overlay" style={{ backgroundImage: 'url(/prints.jpg)'}}>
                <p className="card__title">Prints</p>
              </Link>
              <Link to="/store?category=accessories" className="card overlay" style={{ backgroundImage: 'url(/accessories.jpg)'}}>
                <p className="card__title">Accessories</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container container--full social-section">
          <div className="container--full__child overlay" style={{ backgroundImage: 'url(/social-bg.png)' }}>
            <div className="social-icons">
              <i className="instagram"></i>
              <i className="facebook"></i>
              <i className="twitter"></i>
            </div>
          </div>
          <div className="container--full__child">
            <ModalGallery />
          </div>
        </div>

        <RecentPosts showLink={true} numPosts={4} />

        <div className="container">
          <div className="subhead-link">
            <h2>Events</h2><Link to="/events">See All Events</Link>
          </div>
          <div className="card-row">
            <div className="card-row__container">
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}