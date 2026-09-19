import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slices/counter'
import Kuchbi from './component/Kuchbi'

const App = () => {
  
  
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter)

  console.log(count);
  
  return (
    
  <>
    <div>
      Counter application {count.value}


      <div>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <button onClick={() => {dispatch(decrement())}}>Decrement</button>
        <button onClick={() => {dispatch(reset())}}>Reset</button>
      </div>
    </div>


    <Kuchbi />



  </>
  )
}

export default App