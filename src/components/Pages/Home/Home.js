import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import ModalGallery from '../../ModalGallery';

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
          <h2>Shop</h2>
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

        <div className="container">
          <h2>News & Events</h2>
          <div className="card-row">
            <div className="card-row__container">
              <Link to="#" className="card card--news">
                <div className="news__image overlay" style={{ backgroundImage: 'url(/news-1.jpg)' }}></div>
                <div className="card--news__content">
                  <p className="news__title">Lorem Ipsum</p>
                  <p className="news__date">2/22/20</p>
                  <p className="news__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Link>

              <Link to="#" className="card card--news">
                <div className="news__image overlay" style={{ backgroundImage: 'url(/news-2.jpg)' }}></div>
                <div className="card--news__content">
                  <p className="news__title">Lorem Ipsum</p>
                  <p className="news__date">2/22/20</p>
                  <p className="news__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Link>

              <Link to="#" className="card card--news">
                <div className="news__image overlay" style={{ backgroundImage: 'url(/news-3.jpg)' }}></div>
                <div className="card--news__content">
                  <p className="news__title">Lorem Ipsum</p>
                  <p className="news__date">2/22/20</p>
                  <p className="news__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Link>


              <div className="card card--news">
                <div className="news__image overlay" style={{ backgroundImage: 'url(/news-4.jpg)' }}></div>
                <div className="card--news__content">
                  <p className="news__title">Lorem Ipsum</p>
                  <p className="news__date">2/22/20</p>
                  <p className="news__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

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
              <li>Store</li>
              <li>News</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}