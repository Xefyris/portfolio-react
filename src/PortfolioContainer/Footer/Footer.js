import React from 'react'
import FooterContent from './FooterContent/FooterContent'
import FooterSeparator from './FooterSeparator/FooterSeparator'
import './Footer.css'

export default function Footer() {
    return (
      <div className="footer-container">
        <FooterSeparator />
        <FooterContent />
      </div>
    );
}
