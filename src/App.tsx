import { useState } from 'react'
import './index.css'
import Input from './Input'
import RobotDisplay from './RobotDisplay'

function App() {
  const [robotStringArray, setRobotStringArray] = useState<string[]>([])

  return (
    <div className="App">
      <Input setRobotStringArray={setRobotStringArray} robotStringArray={robotStringArray}/>
      <RobotDisplay robotStringArray={robotStringArray}/>
    </div>
  )
}

export default App
