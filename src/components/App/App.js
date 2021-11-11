import './App.css';
import questionCentrist from '../../utils/arraysCentrist';
import quotesReflector from '../../utils/arraysReflector';
import quotesСonstructor from '../../utils/arraysConstructor';
import { useState } from 'react';
import Button from '../Button/Button';

const App = () => {
  const [randomQuestionCentrist, setRandomQuestionCentrist] = useState([{
    question: 'Приветствую Вас!',
    description: 'Сформулируйте вопрос и нажмите на любую кнопку'
  }]);
  const [cardColor, setCardColor] = useState()

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

  const handleRandomNumderArray = (questionArray) => {
    return Math.floor(Math.random() * questionArray.length);

  }

  const handleNoRepeating = (array, randomNumber) => {

    if (array[randomNumber] === randomQuestionCentrist[0]) {
      if (randomNumber === array.length - 1) {
        return randomNumber -= 1;
      }
      return randomNumber += 1;
    }
    return randomNumber
  }

  const handleChange = (e) => {
    let randomNumber

    if (e.target.textContent === nameButton.centrist) {
      randomNumber = handleRandomNumderArray(questionCentrist)
      randomNumber = handleNoRepeating(questionCentrist, randomNumber)
      setRandomQuestionCentrist([questionCentrist[randomNumber]]);
      setCardColor(colorButton.colorBlue);
    } else if (e.target.textContent === nameButton.reflector) {
      randomNumber = handleRandomNumderArray(quotesReflector)
      randomNumber = handleNoRepeating(quotesReflector, randomNumber)
      setRandomQuestionCentrist([quotesReflector[randomNumber]]);
      setCardColor(colorButton.colorRed);
    } else if (e.target.textContent === nameButton.constructor) {
      randomNumber = handleRandomNumderArray(quotesСonstructor)
      randomNumber = handleNoRepeating(quotesСonstructor, randomNumber)
      setRandomQuestionCentrist([quotesСonstructor[randomNumber]]);
      setCardColor(colorButton.colorBlack);
    }

  }

  return (
    <div className="page">
      <div className="main">
        <h1 className="main__quotes"
          style={{ background: cardColor }}>{randomQuestionCentrist[0].question}</h1>
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
