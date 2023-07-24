import React from 'react'
import './CountryCapitalGame.css';

function CountryCapitalGame({ 
    countriesToRender, handleCountryClick, clickedItem, mistake,
    capitalsToRender, handleCapitalClick, clickedCapitalItem, isSecondStep
}) 

{
   function onCountryClick(item) {
      handleCountryClick(item)
   }

   function onCapitalClick(item) {
      handleCapitalClick(item)
   }

    return ( 
        <div className="country-capital-game__btn-container">
        {countriesToRender.map((item, index) => (
          <button 
            onClick={() => onCountryClick({item})}
            className={`country-capital-game__btn ${clickedItem === item && mistake? 'country-capital-game__btn-red': clickedItem === item? 'country-capital-game__btn_active':''}`}
            key={index}>
            {item}
          </button>
        ))}

        {capitalsToRender.map((item, index) => (
          <button 
            onClick={() => onCapitalClick({item})}
            className={`country-capital-game__btn ${clickedCapitalItem === item && mistake ? 'country-capital-game__btn-red' : ""}`}
            disabled={isSecondStep}
            key={index + 10}>
            {item}
          </button>
        ))}
      </div>
      );
    }
    
    export default CountryCapitalGame;