import { useState } from 'react'

interface Props {
    setRobotStringArray: React.Dispatch<React.SetStateAction<string[]>>,
    robotStringArray: string[]
}

const Input = ({setRobotStringArray, robotStringArray}: Props) => {
    const [text, setText] =  useState<string>('')

    const addNewRobot = () =>{
        setRobotStringArray([text, ...robotStringArray])
        setText('')
    }

  return (
    <div>
        <input 
            placeholder='Enter your Text'
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={addNewRobot}>Enter</button>
    </div>
  )
}

export default Input