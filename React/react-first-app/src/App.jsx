// import "./App.css"

// const App = () => {
// return(
//  <nav className="navbar">

//   <h3>Logo</h3>

//   <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Contact</li>
//   </ul>
//  </nav>
// )
// }

// export default App


import { useState } from 'react';
import Card from './component/Card'

const App = () => {
  const [num, setNum] = useState(0)
  
  
  console.log("app component render how.. -->");
  // console.log(num);
  
  const setNumHandler = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <h1>
        This is App Component
      </h1>

      <button onClick={setNumHandler}>update num</button>

      <Card />
    </div>
  )
}

export default App
