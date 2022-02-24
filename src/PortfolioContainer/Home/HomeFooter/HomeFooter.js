import React from 'react'
import './HomeFooter.css'

export default function HomeFooter() {
    return (
      <div className="home-footer-container">
        <div className="home-footer-parent">
          <img
            src={require("../../../assets/Footer/shape-bg.png")}
            alt="no internet connection"
          />
        </div>
      </div>
    );
}
