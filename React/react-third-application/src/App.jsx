import React, { useEffect, useState } from "react";
import Card from "./component/Card";
const App = () => {
  console.log("app render -->");

  const [num, setNum] = useState(10);
  const [count, setCount] = useState(1);

  const setNumHandler = () => {
    // setNum(num + 1);
    setCount(count + 1);
  };

  console.log(num);

  useEffect(() => {
    console.log("useEffect is running -->");

    // api calling

    fetch(`https://dummyjson.com/users/${num}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });


  }, [num, count]);



  // useEffect(() => {

  //   return () => {
  //     console.log("un mount howa....");
  //   }

  // },[])
  return (
    <div>
      This is app component
      <button onClick={setNumHandler}>update num handler</button>
      <Card />
    </div>
  );

  // const [showTimer, setShowTimer] = useState(true);

  // return (
  //   <div>
  //     <button onClick={() => setShowTimer(!showTimer)}>
  //       {showTimer ? "Unmount Component" : "Mount Component"}
  //     </button>
      
  //     {/* Conditional rendering triggers mounting/unmounting */}
  //     {showTimer && <TimerComponent />}
  //   </div>
  // )
};

export default App;



// Child Component that will be mounted and unmounted
// function TimerComponent() {
//   useEffect(() => {
//     // 1. Setup when component mounts
//     const timer = setInterval(() => {
//       console.log("Timer ticking...");
//     }, 1000);

//     // 2. Cleanup when component unmounts
//     return () => {
//       clearInterval(timer);
//       console.log("Component unmounted! Timer cleared.");
//     };
//   }, []); // Empty array ensures this only triggers on mount and unmount

//   return <div>Timer is running. Look at your console.</div>;
// }

// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './component/Card'
// import ChildToParent from './component/ChildToParent'

// function App() {

// // const returnUseState = useState(0)
// // console.log(returnUseState);

// // let janii = [1,2]

// // const [one, two] = janii;
// // console.log(one);

// // const [count, setCount] = useState(10);
// // const [isAdmin, setIsAdmin] = useState(false);

// // console.log(isAdmin);

// const [products, setProducts] = useState([])

// //

// // const apiCall = () => {
// // const response = [
// //   {},{}
// // ]

// // setProducts(response)
// // }

// // console.log(products);

// // const updateCount = () => {
// //   // setCount (count + 1)

// //   if(true){
// //     setAge(age + 1)
// //   }
// // }

// // useEffect(() => {
// // apiCall()
// // }, [])

// // const editUserDetails = () => {

// //   let updateKerdoUsername = "abdullah";

// //   setUsername(updateKerdoUsername)
// // }

//   return (
//     <>

// <ChildToParent />

// {/* <Card username={"Muhammad Hasan Ashraf"} about={"hey user! it's me hasan!"} />
// <Card username={"Muhammad Ashraf"} about={"hey user! it's me!"} />
// <Card username={" Hasan Ashraf"} about={"hey user! it's me hasan!"} /> */}

//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={editUserDetails}>Age is</button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App

// // 1️⃣ What is State?

// // state react ka built in object hai jiska kaam hota hai component ke internal memory ko manage kerna...

// // 2️⃣ How to Handle Events in React?

// // 3️⃣ use State in Depth ==>
// //    🔹 Syntax   ==> const [count, setCount] = useState()
// //    🔹 Different Types of State
// //      1️⃣ Number State
// // 	2️⃣ String State
// // 	3️⃣ Boolean State
// // 	4️⃣ Object State
// // 	5️⃣ Array State

// // 4️⃣ State vs Props

// // 5️⃣ State Management

// // multiple components ke dermiyan data share kerny ko state management kehty hain ...App.

// // 6️⃣ Props Passing (Parent ➜ Child)

// // 7️⃣ Props Passing (Child ➜ Parent)

// // state

// // internal memory
// // component control kerti haii
// // mutable hoti hai --> Editable
// // useState hook sai banaty hain

// // external memory
// // parent control kerta hai
// // immutabel hoty hain. (Read only)
