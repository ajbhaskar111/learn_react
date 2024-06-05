import logo from './logo.svg';
import './App.css';

function App() {
  const myArray = ['a1', 'a2', 'a3']
  const ans = myArray.map((item) => <li>{item}</li>)
  return (
    <div className="App">
      {/* <header className="App-header">
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
     
      </header> */}
      <ul className="listing">{ans}</ul>
    </div>
  );
}
export default App;
