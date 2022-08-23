import './App.css';
import { useState } from 'react';
import BoxGenerator from './components/BoxGenerator';
import Show from './components/Show';

function App() {
  const [boxes,setBox]=useState([])

  const newBox = (box)=>{
    setBox([...boxes,box])
  }
  return (
    <div className="App">
      <BoxGenerator newBox={newBox}/>
      <Show boxes={boxes}/>
    </div>
  );
}

export default App;
