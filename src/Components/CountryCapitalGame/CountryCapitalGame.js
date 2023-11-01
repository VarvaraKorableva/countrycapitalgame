import React from 'react'
import './CountryCapitalGame.css'

function CountryCapitalGame({ 
    keysToRender, clickedItem, mistake,
    valuesToRender, clickedCapitalItem, isSecondStep,
    handleClick, obtToCompareBad
}) 

{
   function onItemClick(item, objToCompare) {
      handleClick(item, objToCompare)
      console.log(objToCompare)
   }

    return ( 
        <div className="country-capital-game__btn-container">
          <div className="country-capital-game__columl-container">
            {valuesToRender.map((item, index) => (
              <button 
                onClick={() => onItemClick({item}, obtToCompareBad)}
                className={`country-capital-game__btn ${clickedCapitalItem === item && mistake ? 'country-capital-game__btn-red' : ""}`}
                disabled={isSecondStep}
                key={index + 10}>
                {item}
              </button>
            ))}
          </div>
          <div className="country-capital-game__columl-container">
            {keysToRender.map((item, index) => (
              <button 
                onClick={() => onItemClick({item}, obtToCompareBad)}
                className={`country-capital-game__btn ${clickedItem === item && mistake? 'country-capital-game__btn-red': clickedItem === item? 'country-capital-game__btn_active':''}`}
                key={index}>
                {item}
              </button>
            ))}
          </div>

      </div>
      );
    }
    
    export default CountryCapitalGame;