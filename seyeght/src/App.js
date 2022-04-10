import logo from './logo.png';
import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />

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
