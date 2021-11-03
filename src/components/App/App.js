import './App.css';
import questionCentrist from '../../utils/arraysCentrist';
import quotesReflector from '../../utils/arraysReflector';
import quotesСonstructor from '../../utils/arraysConstructor';
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

  const nameButton = {
    centrist: 'Центрист',
    reflector: 'Рефлектор',
    constructor: 'Конструктор'
  }

  const handleRandomNamderArray = (questionArray) => {
    return Math.floor(Math.random() * questionArray.length);
  }

  const handleNoRepeating = (array, randomNumber) => {
    if (array[randomNumber] === randomQuestionCentrist[0]) {
      if (randomNumber === array.length - 1) {
        return randomNumber -= 1;
      }
      return randomNumber += 1;
    }
  }

  const handleChange = (e) => {
    let randomNumber

    if (e.target.textContent === 'Центрист') {
      randomNumber = handleRandomNamderArray(questionCentrist)
      handleNoRepeating(questionCentrist, randomNumber)
      setRandomQuestionCentrist([questionCentrist[randomNumber]]);
    } else if (e.target.textContent === 'Рефлектор') {
      randomNumber = handleRandomNamderArray(quotesReflector)
      handleNoRepeating(quotesReflector, randomNumber)
      setRandomQuestionCentrist([quotesReflector[randomNumber]]);
    } else if (e.target.textContent === 'Конструктор') {
      randomNumber = handleRandomNamderArray(quotesСonstructor)
      handleNoRepeating(quotesСonstructor, randomNumber)
      setRandomQuestionCentrist([quotesСonstructor[randomNumber]]);
    }

  }

  return (
    <div className="page">
      <div className="main">
        <h1 className="main__quotes">{randomQuestionCentrist[0].question}</h1>
        <p className="main__description">{randomQuestionCentrist[0].description}</p>
        <Button
          color={colorButton.colorRed}
          nameButton={nameButton.reflector}
          onChange={handleChange} />
        <Button
          color={colorButton.colorBlue}
          nameButton={nameButton.centrist}
          onChange={handleChange} />
        <Button
          color={colorButton.colorBlack}
          nameButton={nameButton.constructor}
          onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
