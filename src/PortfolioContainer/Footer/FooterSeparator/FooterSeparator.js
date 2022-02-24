import React from 'react'
import './FooterSeparator.css'

export default function FooterSeparator() {
    return (
      <div className="footer-separator-container">
        <div className="footer-separator-parent">
          <img
            src={require("../../../assets/Footer/shape-bg.png")}
            alt="no internet connection"
          />
        </div>
      </div>
    );
}
