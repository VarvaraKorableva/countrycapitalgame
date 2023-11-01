import React from 'react'
import './SelectionButtons.css' 

function SelectionButtons({handleChoose}) {

    //const [isClicked, setIsClicked] = React.useState(false)
    function onAddClike(num){
        handleChoose(num)
    }

    return (
        <div className='selection-buttons__container'>
            <button className='selection-buttons__oneButton' onClick={() => onAddClike(2)}>Addition of 2</button>
            <button className='selection-buttons__oneButton' onClick={() => onAddClike(3)}>Addition of 3</button>
            <button className='selection-buttons__oneButton' onClick={() => onAddClike(4)}>Addition of 4</button>
            <button className='selection-buttons__oneButton' onClick={() => onAddClike(10)}>Addition of 10</button>
        </div>
    )
} 

export default SelectionButtons