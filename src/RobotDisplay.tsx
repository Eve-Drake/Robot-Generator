import React from 'react'

interface Props {
    robotStringArray: string[],
    deleteRobot: (name: string) => void
}

const RobotDisplay = ({robotStringArray, deleteRobot} : Props) => {
  return (
    <div>
        {robotStringArray.map((robotString, index)=>(
            <div key={index} className='robotImages'>
                <img onClick={()=>deleteRobot(robotString)}  src={'https://robohash.org/' + robotString} />
            </div>
        ))}
    </div>
  )
}

export default RobotDisplay