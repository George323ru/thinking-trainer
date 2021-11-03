import './App.css';
import questionCentrist from '../../utils/arraysCentrist';
import { useState } from 'react';
import Button from '../Button/Button';

const App = () => {
  const [randomQuestionCentrist, setRandomQuestionCentrist] = useState([{
    question: '',
    description: ''
  }]);

  const colorButton = {
    colorBlue: "#2bade0",
    colorRed: "#e34242",
    colorBlack: "#333333"
  }

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
        <h1 className="main__quotes">{randomQuestionCentrist[0].question}</h1>
        <p className="main__description">{randomQuestionCentrist[0].description}</p>
        <Button
          color={colorButton.colorBlue}
          onChange={handleChange} />
        <Button
          color={colorButton.colorRed}
          onChange={handleChange} />
        <Button
          color={colorButton.colorBlack}
          onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
