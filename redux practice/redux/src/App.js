import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import {incrementFunction,decrementFunction} from "./component/actioncreator"

function App() {
  const [color,setColor]=useState("red")
  const countValue=useSelector(item=>item.incrementValue)
  const dispatch=useDispatch() 
  return (
    <div>
      <h1>Color:{color}</h1>
      <button onClick={()=>setColor("blue")}>Change color</button>

      <h1>Count:{countValue}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>Increase Count</button>
    </div>
  )
}
export default App;
