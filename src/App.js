import React from 'react'
import logo from './logo.svg';
import './App.css';
import { contriesAndCapitals } from './const'

function App() {

  const [isSecondStep, setIsSecondStep] = React.useState(true)
  //const [isAllButtonsBlocked, setIsAllButtonsBlocked] = React.useState(false)
  const [clickedIndex, setClickedIndex] = React.useState(null)
  const [clickedCapitalIndex, setClickedCapitalIndex] = React.useState(null)

  const [indexOfChoice, setIndexOfChoice] = React.useState(null)
  const [rightChoice, setRightChoice] = React.useState(false)
  const [countriesToRender, setCountriesToRender] = React.useState(Object.keys(contriesAndCapitals))
  const [capitalsToRender, setCapitalsToRender] = React.useState(Object.values(contriesAndCapitals))

  function deleteRightChoice(index) {
    const indexToRemove = index;
    setCountriesToRender(countriesToRender.filter((item, index) => index !== indexToRemove));
    setCapitalsToRender(capitalsToRender.filter((item, index) => index !== indexToRemove));

    setClickedIndex(null)
    console.log(countriesToRender)
    console.log(capitalsToRender)
  }

  function handleCountryClick(index) {
    setClickedIndex(index)
    setIsSecondStep(false)

    setIndexOfChoice(index)
    console.log(index)
  }

  function handleCapitalClick(index) {
    console.log(index);
    //setIsAllButtonsBlocked(true);
    setIsSecondStep(true);
    setClickedCapitalIndex(index);
    //setRightChoice(indexOfChoice === index);
    if (indexOfChoice === index) {
      setRightChoice(true);
      deleteRightChoice(index)
      console.log(true);
      console.log(index)
    } else {
      setRightChoice(false);
      setClickedCapitalIndex(null);
      console.log(false);
    }
    setTimeout(() => {
      //setIsAllButtonsBlocked(false);
      setIsSecondStep(false);
      setRightChoice(false);
      setIndexOfChoice(null);
    }, 5000);
  }

  return (
    <div className="App">
      {countriesToRender.length?
      <div className="btn-container">
        {countriesToRender.map((item, index) => (
          <button 
            onClick={() => handleCountryClick(index)}
            //className={`btn ${isClicked && 'btn_active'}`}
            //disabled={isAllButtonsBlocked}
            //className={`btn ${clickedIndex === index ? (rightChoice ? 'btn__green' : 'btn__red') : ''}`}
            className={`btn ${clickedIndex === index ? 'btn_active' : ''}`}
            
            key={index}>
            {item}
          </button>
        ))}

        {capitalsToRender.map((item, index) => (
          <button 
            onClick={() => handleCapitalClick(index)}
            className={`btn ${clickedCapitalIndex === index && rightChoice === false ? 'btn__red' : ""}`}
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