import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Add_days() {
  const [day, setDay] = useState(0)

  function plus_day() {
    setDay(day + 1)
  }

  return (
    <div>
    <button onClick={plus_day}>Spend Day</button>
    <p>{day}</p>
    </div>
  );
}

function App() {
  

  return (
    <div>
      <Add_days />
    </div>
  );
}

export default App
