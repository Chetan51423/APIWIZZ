import React from 'react'
import {useState} from 'react'

const Input = () => {
    const [gridNCount, setGridNCount] = useState();
    const handleChange = (event)=> {
        setGridNCount(event.target.value);
    }
    console.log(gridNCount)
  return (
    <div>
    <label htmlFor="grid_N">Enter for grid: </label>
    <input id='grid_N' value={gridNCount} onChange={handleChange} />
    </div>
  )
}

export default Input
