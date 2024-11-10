import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '3e5dda6434mshb5669669f357ca0p177947jsn56f158e5ab6a',
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
      }
    };

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=Tucker', options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
