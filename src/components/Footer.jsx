 import React from 'react';
import Logo from '../assets/Library.svg';

const Footer = () => {
  return (

    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
           <figure className="footer__logo">
             <img src={Logo} alt="" />
           </figure>
          </a>
          <div className="footer__list">
            <a href="/home" className="footer__link">Home</a>
            <a href="/about" className="footer__link no-cursor">
              <span className="footer__link no-cursor">About</span>
            </a>
            <a href="/books" className="footer__link">Books</a>
            <a href="/cart" className="footer__link">Cart</a>
          </div>
          <div className="footer__copyright">
            <p>&copy; 2026 Your Library. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;