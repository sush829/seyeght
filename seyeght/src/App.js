import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
        <ul className="nav-links">
          <li className="nav-item"><a href="#">Login</a></li>
          <li className="nav-item"><a href="#">Logout</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to sEYEght. We are the future of peer-to-peer, crowdsourced detection and reporting of unknown or unwanted anomalies worldwide.
        </p>
		<p class="test">Test text</p>

      </header>
    </div>
  );
}

export default App;
