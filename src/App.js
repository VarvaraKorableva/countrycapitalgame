import React from 'react'
//import logo from './logo.svg';
import './App.css';
import { contriesAndCapitals } from './const'

function App() {

  const [isSecondStep, setIsSecondStep] = React.useState(true)
  const [clickedItem, setClickedItem] = React.useState()
  const [clickedCapitalItem, setClickedCapitalItem] = React.useState()

  const [countriesToRender, setCountriesToRender] = React.useState(Object.keys(contriesAndCapitals))
  const [capitalsToRender, setCapitalsToRender] = React.useState(Object.values(contriesAndCapitals))

  const [firstChoice, setFirstChoice] = React.useState('')

  const [mistake, setMistake] = React.useState(false)

/*
  const shuffleGame = () => {
  const shuffledCountries = [...countriesToRender]
  .sort(() => Math.random() - 0.5)
  //.map((country) => ({...country, id: Math.random()}))
  const shuffledCapitals = [...capitalsToRender]
  .sort(() => Math.random() - 0.5)
  //.map((capital) => ({...capital, id: Math.random()}))

  setFirstChoice('')
  setMistake(false)
  
  setCountriesToRender(shuffledCountries)
  setCapitalsToRender(shuffledCapitals)
}

React.useEffect(() => {
  shuffleGame()
},[])*/


  function deleteRightChoice(index) {
    const indexToRemove = index;
    setCountriesToRender(countriesToRender.filter((item, index) => index !== indexToRemove));
    setCapitalsToRender(capitalsToRender.filter((item, index) => index !== indexToRemove));
  }

  function handleCountryClick(item, index) {
    setClickedItem(item.item)
    setIsSecondStep(false)
    setFirstChoice(item)
    setMistake(false)
  }

  function handleCapitalClick(item, index) {
    console.log(item);
    console.log(contriesAndCapitals[firstChoice.item])
    setIsSecondStep(true);
    if(item.item == contriesAndCapitals[firstChoice.item]) {  
      deleteRightChoice(index)
    } else {
      setClickedCapitalItem(index);
      setMistake(true)
      console.log(false);
    }
  }

  return (
    <div className="App">
      {countriesToRender.length?
      <div className="btn-container">
        {countriesToRender.map((item, index) => (
          <button 
            onClick={() => handleCountryClick({item})}
            className={`btn ${clickedItem === item && mistake? 'btn__red': clickedItem === item? 'btn_active':''}`}
            key={index}>
            {item}
          </button>
        ))}

        {capitalsToRender.map((item, index) => (
          <button 
            onClick={() => handleCapitalClick({item}, index)}
            className={`btn ${clickedCapitalItem === index && mistake ? 'btn__red' : ""}`}
            disabled={isSecondStep}
            key={index + 10}>
            {item}
          </button>
        ))}
      </div>
      : 
      <h1>Congratulations</h1>
      }
    </div>
  );
}

export default App;