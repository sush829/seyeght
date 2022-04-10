import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="nav-links">
          <li className="nav-item">Login</li>
          <li className="nav-item">Logout</li>
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
