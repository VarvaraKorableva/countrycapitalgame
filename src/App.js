import React from 'react'
import './App.css';
import { contriesAndCapitals } from './const'
import CountryCapitalGame from './Components/CountryCapitalGame/CountryCapitalGame'

function App() {

  const [isSecondStep, setIsSecondStep] = React.useState(true)
  const [clickedItem, setClickedItem] = React.useState(null)
  const [clickedCapitalItem, setClickedCapitalItem] = React.useState(null)
  const [isAgainBtnCliked, setIsAgainBtnCliked] = React.useState(false)
  const [countriesToRender, setCountriesToRender] = React.useState(Object.keys(contriesAndCapitals))
  const [capitalsToRender, setCapitalsToRender] = React.useState(Object.values(contriesAndCapitals))
  const [firstChoice, setFirstChoice] = React.useState('')
  const [mistake, setMistake] = React.useState(false)

  const shuffleGame = () => {
    const shuffledCountries = [...countriesToRender]
      .sort(() => Math.random() - 0.5)

    const shuffledCapitals = [...capitalsToRender]
      .sort(() => Math.random() - 0.5)

    setFirstChoice('')
    setMistake(false)
  
    setCountriesToRender(shuffledCountries)
    setCapitalsToRender(shuffledCapitals)
  }

  function playAgain() {
    setIsAgainBtnCliked(true)
    setCountriesToRender(Object.keys(contriesAndCapitals))
    setCapitalsToRender(Object.values(contriesAndCapitals))
    setClickedItem(null)
  }

  React.useEffect(() => {
    shuffleGame()
  },[])

  React.useEffect(() => {
  shuffleGame()
  },[isAgainBtnCliked])


  function deleteRightChoice(capital, country) {
    setCountriesToRender(countriesToRender.filter((item) => item !== country));
    setCapitalsToRender(capitalsToRender.filter((item) => item !== capital));
  }

  function handleCountryClick(item) {
    setClickedItem(item.item)
    setIsSecondStep(false)
    setFirstChoice(item)
    setMistake(false)
  }

  function handleCapitalClick(item) {
    setIsSecondStep(true);
    if(item.item == contriesAndCapitals[firstChoice.item]) {  
      deleteRightChoice(item.item, firstChoice.item)
      
    } else {
      setClickedCapitalItem(item.item);
      setMistake(true)
      console.log(false);
    }
  }

  return (
    <div className="app">
      {countriesToRender.length?
      <CountryCapitalGame
        countriesToRender={countriesToRender}
        handleCountryClick={handleCountryClick}
        clickedItem={clickedItem}
        mistake={mistake}
        capitalsToRender={capitalsToRender}
        handleCapitalClick={handleCapitalClick}
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