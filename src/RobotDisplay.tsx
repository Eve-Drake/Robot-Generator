import React from 'react'

interface Props {
    robotStringArray: string[]
}

const RobotDisplay = ({robotStringArray} : Props) => {
  return (
    <div>
        {robotStringArray.map((robotString, index)=>(
            <img  key={index} src={'https://robohash.org/' + robotString} />
        ))}
    </div>
  )
}

export default RobotDisplay