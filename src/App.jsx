import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Add_days() {

  const [day, setDay] = useState(0)

  let rank = "이병"

  if (day >= 540) {       // 총 18개월(약 540일) 이상 전역
    rank = "전역!"
  } else if (day >= 450) {  // 약 15개월 차부터 병장 (18개월 기준 450~540일)
    rank = "병장"
  } else if (day >= 270) {  // 약 9개월 차부터 상병 (270~450일)
    rank = "상병"
  } else if (day >= 60) {   // 약 3개월 차부터 일병 (60~270일)
    rank = "일병"
  } else {                  // 입대 직후 ~ 2개월 (0~60일)
    rank = "이병"
  }

  function plus_day() {
    setDay(day + 10)
  }

  return (
    <div className="all">

      <div className="screen">
        <button className="spend_day_button" onClick={plus_day}>Spend Day</button>
      </div>

      <center>
        <p>{day}</p>
        <p>{rank}</p>
      </center>
      
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
