import React from "react"
import logo from '../logo.png';
import '../App.css';


function Navbar() {
    return (
        <div className="navbar">
          <div className="App-logo"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="nav-item">Login</div>
          <div className="nav-item">Logout</div>
        </div>
    )
}

export default Navbar;
