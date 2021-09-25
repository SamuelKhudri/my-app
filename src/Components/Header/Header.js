import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
          <img src={logo} alt="" srcset="" /> 
          <nav>
              <a href="/shop">Shop</a>
              <a href="/orders">Orders</a>
              <a href="inventor">Order Review</a>
              <a href="Manage">Manage Inventor</a>
          </nav>
        </div>
    );
};

export default Header;