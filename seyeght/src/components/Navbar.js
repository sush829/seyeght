import React from "react"
import logo from '../logo.png';
import '../App.css';


function Navbar() {
    return (
        <div className="navbar">
          <div className="App-logo"><a href=""><img src={logo} className="App-logo" alt="logo" /></a></div>
          <a className="nav-link" href=""><div className="nav-item">Login</div></a>
          <a className="nav-link" href=""><div className="nav-item">Logout</div></a>
        </div>
    )
}

export default Navbar;
