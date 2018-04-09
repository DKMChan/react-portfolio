import React, { Component } from 'react';
import logo from './logo.svg';
import './css/NavMenu.css'

class NavMenu extends Component {
  render() {
    return (
      <div className="navbar">
      <header>
        <div className="navWrapper">
              <div className="navbar-menu">
                      <ul id="top-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                      </ul>
              </div>
        </div>
      </header>
      </div>
    );
  }
}

export default NavMenu;
