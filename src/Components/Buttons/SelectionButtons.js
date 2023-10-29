import React from 'react'
import './SelectionButtons.css' 

function SelectionButtons() {

    //const [isClicked, setIsClicked] = React.useState(false)

    return (
        <div className='selection-buttons__container'>
            <button className='selection-buttons__oneButton'>Addition of 2</button>
            <button className='selection-buttons__oneButton'>Addition of 3</button>
            <button className='selection-buttons__oneButton'>Addition of 4</button>
            <button className='selection-buttons__oneButton'>Addition of 10</button>
        </div>
    )
} 

export default SelectionButtons