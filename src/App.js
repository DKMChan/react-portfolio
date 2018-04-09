import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Navmenu from './NavMenu';
import HomeBanner from './HomeBanner';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navmenu/>
        <HomeBanner/>
        <About/>
        <Portfolio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
