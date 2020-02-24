import React, { Component } from 'react';

export default class ModalGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  handleModal = (image = '') => {
    this.setState({
      showModal: !this.state.showModal,
      activeImage: image
    })
  }

  render() {
    return (
      <div className="recent-posts">
        <div onClick={() => this.handleModal('/social-1.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-1.jpg)'}}></div>
        <div onClick={() => this.handleModal('/social-2.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-2.jpg)'}}></div>
        <div onClick={() => this.handleModal('/social-3.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-3.jpg)'}}></div>
        <div onClick={() => this.handleModal('/social-4.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-4.jpg)'}}></div>
        <div onClick={() => this.handleModal('/social-5.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-5.jpg)'}}></div>         
        <div onClick={() => this.handleModal('/social-6.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-6.jpg)'}}></div>         
        <div onClick={() => this.handleModal('/social-7.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-7.jpg)'}}></div>
        <div onClick={() => this.handleModal('/social-8.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-8.jpg)'}}></div>
        <div onClick={() => this.handleModal('/social-9.jpg')} className="recent-posts__post" style={{ backgroundImage: 'url(/social-9.jpg)'}}></div>

        { this.state.showModal ?
          <Modal image={this.state.activeImage} onClose={this.handleModal} />
        :
          ''
        }
      </div>
    )
  }
}

class Modal extends Component {
  render() {
    return (
      <div className="modal-background">
        <i className="close" onClick={this.props.onClose}></i>
        <div className="modal-content">
          <img src={this.props.image}></img>
        </div>
      </div>
    )
  }
}