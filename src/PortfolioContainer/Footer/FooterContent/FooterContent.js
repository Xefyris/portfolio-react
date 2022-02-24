import React, { Component } from 'react'
import './FooterContent.css'

export default class FooterContent extends Component {
  render() {
    return (
      <div className="footer-content-container">
        <div className="footer-content-parent">
          <div className="footer-content-text">Home :: About Me :: Resume</div>
        </div>
      </div>
    );
  }
}
