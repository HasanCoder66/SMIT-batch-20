import React, { useEffect } from 'react'

const Parent = () => {

    const recieveDataHandler = (data) => {
    console.log("Data -->",data);

    }

  return (
    <div>
      <Child handler={recieveDataHandler} />
    </div>
  )
}

export default Parent



const Child = ({handler}) => {

    const sendDataFunction = () => {
        handler(12)
    }

    useEffect(() => {
        sendDataFunction()
    }, [])
  return ( 
    <div>
      This is child Component
    </div>
  )
}