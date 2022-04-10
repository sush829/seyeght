import React from "react"
import ReactDOM from "react-dom"
import logo from './logo.png';
import './App.css';


function Navbar() {
    return (
        <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="nav-links">
          <li className="nav-item">Login</li>
          <li className="nav-item">Logout</li>
        </ul>
      </nav>
    )
}

export default Navbar
