import React from 'react'
import './App.css';
import { contriesAndCapitals, additionOfTwo, additionOfThree, additionOfFour, additionOfTen } from './const'
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
      setIsAgainBtnCliked(true)
      setClickedItem(null)
      //console.log(keysToRender)
      shuffleGame()
    } if (num == 3) {
      setKeysToRender(Object.keys(additionOfThree))
      setValuesToRender(Object.values(additionOfThree))
      setObtToCompareBad(additionOfThree)
      setIsAgainBtnCliked(true)
      setClickedItem(null)
      //shuffleGame()
    } if (num == 4) {
      setKeysToRender(Object.keys(additionOfFour))
      setValuesToRender(Object.values(additionOfFour))
      setObtToCompareBad(additionOfFour)
      setIsAgainBtnCliked(true)
      setClickedItem(null)
      //shuffleGame()
    } if (num == 10) {
      setKeysToRender(Object.keys(additionOfTen))
      setValuesToRender(Object.values(additionOfTen))
      setObtToCompareBad(additionOfTen)
      setIsAgainBtnCliked(true)
      setClickedItem(null)
      //shuffleGame()
    }
  }

  function shuffleGame() {
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
    shuffleGame()
  },[])

  React.useEffect(() => {
  shuffleGame()
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
            console.log(false);
            setGameStarted(false)
          }
      }else{
        setClickedItem(item.item)
        setIsSecondStep(false)
        setGameStarted(true)
        setFirstChoice(item)
        setMistake(false)
        console.log(objToCompare)
        console.log(item)
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