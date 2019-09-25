import React from 'react';
import './App.css';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <h1 className="title is-1">
                  Infinite Scroll Unsplash Code Challenge
                </h1>
              </div>

              <div>
                <Images />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
