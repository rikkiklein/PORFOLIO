import React, { Component }   from 'react';
import './CSS/App.css';
import Portfolio              from './Components/Portfolio.js';
import BannerImage            from './Components/BannerImage.js';
import Drawer                 from './Components/Drawer.js';
import Footer                 from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BannerImage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
