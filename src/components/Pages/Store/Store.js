import React, { Component } from 'react';

import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

export default class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: null
    }
  }

  handleHover = (id) => {
    this.setState({ hover: id }) 
  }

  clearHover = () => {
    this.setState({ hover: null })
  }

  render() {
    return (
      <div>
        <div className="hero hero--internal overlay">
          <div className="hero__content">
            <div className="container">
              <h1>Shop</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-list">

            <div id="1" className="product-list__product" onMouseEnter={() => this.handleHover(1)} onMouseLeave={this.clearHover}>
              <div className="product__image" style={{ backgroundImage: ( this.state.hover == 1 ? "url(/product-1-alt.jpg)" : "url(/product-1.jpg") }}></div>

              <div className="product__details">
                <p className="product__title">Mens T-Shirt</p>
                <p className="product__price">$20.00</p>
              </div>
            </div>
            <div id="2" className="product-list__product" onMouseEnter={() => this.handleHover(2)} onMouseLeave={this.clearHover}>
              <div className="product__image" style={{ backgroundImage: ( this.state.hover == 2 ? "url(/product-1-alt.jpg)" : "url(/product-1.jpg") }}></div>

              <div className="product__details">
                <p className="product__title">Mens T-Shirt</p>
                <p className="product__price">$20.00</p>
              </div>
            </div>
            <div id="3" className="product-list__product" onMouseEnter={() => this.handleHover(3)} onMouseLeave={this.clearHover}>
              <div className="product__image" style={{ backgroundImage: ( this.state.hover == 3 ? "url(/product-1-alt.jpg)" : "url(/product-1.jpg") }}></div>

              <div className="product__details">
                <p className="product__title">Mens T-Shirt</p>
                <p className="product__price">$20.00</p>
              </div>
            </div>
            <div id="4" className="product-list__product" onMouseEnter={() => this.handleHover(4)} onMouseLeave={this.clearHover}>
              <div className="product__image" style={{ backgroundImage: ( this.state.hover == 4 ? "url(/product-1-alt.jpg)" : "url(/product-1.jpg") }}></div>

              <div className="product__details">
                <p className="product__title">Mens T-Shirt</p>
                <p className="product__price">$20.00</p>
              </div>
            </div>
            <div id="5" className="product-list__product" onMouseEnter={() => this.handleHover(5)} onMouseLeave={this.clearHover}>
              <div className="product__image" style={{ backgroundImage: ( this.state.hover == 5 ? "url(/product-1-alt.jpg)" : "url(/product-1.jpg") }}></div>

              <div className="product__details">
                <p className="product__title">Mens T-Shirt</p>
                <p className="product__price">$20.00</p>
              </div>
            </div>
            <div id="6" className="product-list__product" onMouseEnter={() => this.handleHover(6)} onMouseLeave={this.clearHover}>
              <div className="product__image" style={{ backgroundImage: ( this.state.hover == 6 ? "url(/product-1-alt.jpg)" : "url(/product-1.jpg") }}></div>

              <div className="product__details">
                <p className="product__title">Mens T-Shirt</p>
                <p className="product__price">$20.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}