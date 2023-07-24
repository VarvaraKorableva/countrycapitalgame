import React from 'react'

//import './GameField.css';

function CountryCapitalGame({ 
    countriesToRender, handleCountryClick, clickedItem, mistake,
    capitalsToRender, handleCapitalClick, clickedCapitalItem, isSecondStep
}) {
  
    return ( 
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
      );
    }
    
    export default CountryCapitalGame;