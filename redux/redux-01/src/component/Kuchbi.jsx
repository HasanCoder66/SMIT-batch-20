import React from 'react'
import { useSelector } from 'react-redux'

const Kuchbi = () => {

    const count = useSelector((state) => state.counter.value)
  return (
    <div>This aa falana kuch bii.. {count}</div>
  )
}

export default Kuchbi