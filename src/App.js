import logo from './logo.png';
import Dictionary from "./Dictionary";
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
    
      <footer>Coded by Mia Ranaivo, Open sourced on Github</footer>
    </div>
  );
}
