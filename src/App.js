import React, { Component }   from 'react';
import './CSS/App.css';
import Portfolio              from './Components/Portfolio.js';
import BannerImage            from './Components/BannerImage.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BannerImage/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
