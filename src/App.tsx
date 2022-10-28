import { useState } from 'react'
import './index.css'
import Input from './Input'
import RobotDisplay from './RobotDisplay'

function App() {
  const [robotStringArray, setRobotStringArray] = useState<string[]>(['Hello', 'Test', 'Nice', 'Frit', 'Tests'])

  const deleteRobot = (name:string) =>{
    setRobotStringArray(robotStringArray.filter(el => el != name))
  }
  return (
    <div className="App">
      <Input setRobotStringArray={setRobotStringArray} robotStringArray={robotStringArray}/>
      <RobotDisplay robotStringArray={robotStringArray} deleteRobot={deleteRobot}/>
    </div>
  )
}

export default App
