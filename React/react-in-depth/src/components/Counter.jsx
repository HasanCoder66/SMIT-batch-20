import React, { useState } from 'react'
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);


    const incrementHandler = () => {
        setCount(count + 1)
    }
    const decrementHandler = () => {
        setCount(count - 1)
    }

  return (
    <div>
     <h1 className='font-bold text-2xl'> Count is : {count}</h1>

      <div>

        {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
      <Button handler={incrementHandler} title="Increment"  />
      <Button handler={decrementHandler} title={"Decrement"} />
      </div>
    </div>
  )
}

export default Counter
