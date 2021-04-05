import logo from './logo.png';
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import React from "react";
import './App.css';


export default function App() {
  return (
    <div className="container">
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <p id="quote">"Words - so innocent and powerless as they are, as standing in a dictionary, <br/> how potent for good and evil they become in the hands of one who knows how to combine them."
            <br />
            - Nathaniel Hawthorne -
          </p>
        </header>
        <br />
        <div className="intro">
        <h5 className="question">What word do you want to look up?</h5>
        <div id="hint">i.e beta, life, exchange, submarine, warfare </div>
        
          <Dictionary defaultKeyword="knowledge" />
        </div>
    <Footer />
      </div>
      </div>
  );
}
