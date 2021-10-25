
import './App.css';
import quotes from '../../utils/array'
import { useState } from 'react';

const App = () => {
  const [randomIndexQuotes, setRandomIndexQuotes] = useState([])

  const handleChange = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomNumber])
    console.log(randomIndexQuotes[0])

    if (quotes[randomNumber] === randomIndexQuotes[0]) {
      if (randomNumber === quotes.length - 1) {
        randomNumber = randomNumber - 1;
      }
      randomNumber += 1;
    }
    setRandomIndexQuotes([quotes[randomNumber]]);
  }

  return (
    <div className="page">
      <div className="main">
        <h1 className="main__quotes">{randomIndexQuotes}</h1>
        <button className="main__button"
          onClick={handleChange} >Центрист</button>
      </div>
    </div>
  );
}

export default App;
