import './App.css';
import questionCentrist from '../../utils/arraysCentrist';
import { useState } from 'react';
import Button from '../Button/Button';

const App = () => {
  const [randomQuestionCentrist, setRandomQuestionCentrist] = useState([]);

  const handleChange = () => {
    let randomNumber = Math.floor(Math.random() * questionCentrist.length);

    if (questionCentrist[randomNumber] === randomQuestionCentrist[0]) {
      if (randomNumber === questionCentrist.length - 1) {
        randomNumber -= 1;
      }
      randomNumber += 1;
    }
    setRandomQuestionCentrist([questionCentrist[randomNumber]]);
  }

  return (
    <div className="page">
      <div className="main">
        <h1 className="main__quotes">{randomQuestionCentrist}</h1>
        <Button
          onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
