import React from 'react'
import {useState} from 'react'

export const ColorGrid = ({color,onSelectColor}) => {

  const handleClick = ()=> {
    onSelectColor(color)
  }
  return (
    <div>
      <div className='grid' style={{backgroundColor:color}} onClick={handleClick}></div>
    </div>
  )
}

export const Grid = ({color}) => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");
  const changeBackgroundColor = ()=>{
    setBackgroundColor(color)
  }
  return (
    <div>
      <div className='grid' style={{backgroundColor:`${backgroundColor}`}} onClick={changeBackgroundColor}></div>
    </div>
  )
}

// export default Grid
