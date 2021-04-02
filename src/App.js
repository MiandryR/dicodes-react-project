import logo from './logo.png';
import Dictionary from "./Dictionary";
import React from "react";
import './App.css';


export default function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Dictionary />
      </div>
    
      <footer>
        <p id="footer">
        Build by <a
        className="Linkedin"
        title="LinkedIn"
        href="https://www.linkedin.com/in/mia-harison/"
        target="_blank"
        rel="noopener noreferrer"
        >
        Mia Ranaivo
        </a>
            <br/>
        Open-sourced on
        <a
        className="GitHub"
        title="GitHub"
        href="https://github.com/MiandryR"
        target="_blank"
        rel="noopener noreferrer"
        >
                GitHub
        </a>
        </p></footer>
    </div>
  );
}
