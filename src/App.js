import React from 'react'
import './App.css';
import { additionOfTwo, additionOfThree, additionOfFour, additionOfTen } from './const'
import CountryCapitalGame from './Components/CountryCapitalGame/CountryCapitalGame'
import SelectionButtons from './Components/Buttons/SelectionButtons'

function App() {

  const [isSecondStep, setIsSecondStep] = React.useState(true)
  const [clickedItem, setClickedItem] = React.useState(null)
  const [clickedCapitalItem, setClickedCapitalItem] = React.useState(null)
  const [isAgainBtnCliked, setIsAgainBtnCliked] = React.useState(false)
  const [firstChoice, setFirstChoice] = React.useState('')
  const [mistake, setMistake] = React.useState(false)
  const [gameStarted, setGameStarted] = React.useState(false)

  const [obtToCompareBad, setObtToCompareBad] = React.useState(additionOfTwo)

  const [keysToRender, setKeysToRender] = React.useState(Object.keys(additionOfTwo))
  const [valuesToRender, setValuesToRender] = React.useState(Object.values(additionOfTwo))

  function handleChoose(num) {
    if (num == 2) {
      setKeysToRender(Object.keys(additionOfTwo))
      setValuesToRender(Object.values(additionOfTwo))
      setObtToCompareBad(additionOfTwo)
      setClickedItem(null)
      shuffleGame(Object.keys(additionOfTwo), Object.values(additionOfTwo))
    } else if(num == 3) {
      setKeysToRender(Object.keys(additionOfThree))
      setValuesToRender(Object.values(additionOfThree))
      setObtToCompareBad(additionOfThree)
      setClickedItem(null)
      shuffleGame(Object.keys(additionOfThree), Object.values(additionOfThree))
    } else if (num == 4) {
      setKeysToRender(Object.keys(additionOfFour))
      setValuesToRender(Object.values(additionOfFour))
      setObtToCompareBad(additionOfFour)
      setClickedItem(null)
      shuffleGame(Object.keys(additionOfFour), Object.values(additionOfFour))
    } else if (num == 10) {
      setKeysToRender(Object.keys(additionOfTen))
      setValuesToRender(Object.values(additionOfTen))
      setObtToCompareBad(additionOfTen)
      setClickedItem(null)
      shuffleGame(Object.keys(additionOfTen), Object.values(additionOfTen))
    }
  }

  function shuffleGame(keysToRender, valuesToRender) {
    const shuffledKeys = [...keysToRender]
      .sort(() => Math.random() - 0.5)

    const shuffledValues = [...valuesToRender]
      .sort(() => Math.random() - 0.5)
      
    setFirstChoice('')
    setMistake(false)
    setKeysToRender(shuffledKeys)
    setValuesToRender(shuffledValues)
  }

  function playAgain() {
    setIsAgainBtnCliked(true)
    setClickedItem(null)
    setKeysToRender(Object.keys(additionOfTwo))
    setValuesToRender(Object.values(additionOfTwo))
    setObtToCompareBad(additionOfTwo)
  }

  React.useEffect(() => {
    shuffleGame(keysToRender, valuesToRender)
  },[])

  React.useEffect(() => {
  shuffleGame(keysToRender, valuesToRender)
  },[isAgainBtnCliked])


  function deleteRightChoice(key, value) {
    setKeysToRender(keysToRender.filter((item) => item !== value));
    setValuesToRender(valuesToRender.filter((item) => item !== key));
  }

    function handleClick(item, objToCompare) {
      if(gameStarted) {
        setIsSecondStep(true);
          if(item.item == objToCompare[firstChoice.item]) {  
            deleteRightChoice(item.item, firstChoice.item)
            setGameStarted(false)
          } else {
            setClickedCapitalItem(item.item);
            setMistake(true)
            setGameStarted(false)
          }
      }else{
        setClickedItem(item.item)
        setIsSecondStep(false)
        setGameStarted(true)
        setFirstChoice(item)
        setMistake(false)
      }
  }

  return (
    <div className="app">
      <SelectionButtons
        handleChoose={handleChoose}
      ></SelectionButtons>
      {keysToRender.length?
      <CountryCapitalGame
        keysToRender={keysToRender}
        obtToCompareBad={obtToCompareBad}
        clickedItem={clickedItem}
        mistake={mistake}
        valuesToRender={valuesToRender}
        handleClick={handleClick}
        clickedCapitalItem={clickedCapitalItem}
        isSecondStep={isSecondStep}
      />
      : 
      <div className='app__play-again-btn-container'>
        <h1>Congratulations</h1>
        <button onClick={playAgain} className='app__play-again-btn'>Play Again</button>
      </div>

      }
    </div>
  );
}

export default App;