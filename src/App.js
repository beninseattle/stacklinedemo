import { useEffect, useState } from 'react';
import loadData from './util/loadData.ts';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const jsonData = loadData().then(data => setData(data));
  }, []);
  //
  return (
    <div className="App">
      <div>
        Data loaded: {data && data.length ? 'true' : 'false'}
      </div>
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
