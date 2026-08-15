import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

let advices = [
  "Learn HTML", "Learn React", "Regular Apply kero", 
]


function App() {
  const [step, setStep] = useState(1)

  // const nextHandler = () => {
  //   console.log("next handler function is working");
    
  //   // if(3 != 3){
  //   //   setStep(step + 1)

  //   // }else {
  //   //   setStep(1)
  //   // }

  //   step != 3 ? setStep(step + 1)  : setStep(1)
  // }

  // const prevHandler = () => {
  //   console.log("prev handler function is working");
  //   // if(step > 1){
  //   //   setStep(step - 1)
  //   // }else {
  //   //   setStep(3)
  //   // }

  //   step > 1 ? setStep(step - 1) : setStep(3)
  // }

  return (
    <>
  <ul>
    <li className={`${step  == 1 ? "bg-black text-white" : "bg-gray-200 text-black"} `}>1</li>
    <li className={`${step  == 2 ? "bg-black text-white" : "bg-gray-200 text-black"} `}>2</li>
    <li className={`${step  == 3 ? "bg-black text-white" : "bg-gray-200 text-black"} `}>3</li>
  </ul>


  <div>

    ADVICE : {advices[step - 1]}
  </div>


  <div>

    {/* <button onClick={prevHandler}>Previous</button> */}
    <button onClick={() => step > 1 ? setStep(step - 1) : setStep(3)}>Previous</button>
    <button onClick={() => step != 3 ? setStep(step + 1)  : setStep(1)}>Next</button>
  </div>
    </>
  )
}

export default App
