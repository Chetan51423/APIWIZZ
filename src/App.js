import logo from './logo.svg';
import './App.css';
import Input from "./components/Input"
import {Grid, ColorGrid} from "./components/Grid"
import {useState} from 'react'
import {colors} from './constants'

function App() {

  const [gridNCount, setGridNCount] = useState(10);
  // const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");
  console.log("Current selected coloris :=> "+color)

  const handleChange = (event)=> {
      setGridNCount(event.target.value);
  }
  console.log(gridNCount)

   const printGrid = ()=>{
    const grid = [];
    for(let i=1; i<gridNCount; i++)
    {
      const grid2 =[]
      for(let j = 1; j<=gridNCount; j++)
      {
        grid2.push(i*10+j)
      }
      grid.push(grid2);
      console.log(grid2)
    }
    console.log(grid)
    return grid;
   }

   const printColors = ()=>{

    const colorArrayLength = colors.length;

    console.log(colorArrayLength)

    let colorArray = []
    if(colorArrayLength>gridNCount)
    {
      colorArray = colors.slice(0,gridNCount)
    }
    return colorArray;
   }

   const handleSelectColor = (color)=>{
    setColor(color);
   }
   
  

  return (
    <div className="App">
      <div>
        <div className='grid-input'>
          <h1>Grid Assignment</h1>
          <label className='lable-input' htmlFor="grid_N">Enter N for grid: <input id='grid_N' value={gridNCount} onChange={handleChange} /></label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20px"}}>
            <h2 style={{margin:"10px"}}>Current Choosed color:</h2>
            <ColorGrid color={color}/> 
            
          </div>
        </div>
        <div className='main-grid'>
          
          {
            printGrid().map((cell)=>{
              return (
                <div className='grid-row' >
                  {cell.map((cell2)=><Grid key={cell2} color={color}/>)}
                </div>
            )}) 
          }
          <div className='grid-row'>
          {
            printColors().map((color,index)=><ColorGrid key={index} color={color}  onSelectColor={handleSelectColor}/>)
          }
          </div>
          
              
        </div>
      </div>
      
      
        
      
    </div>
  );
}

export default App;
