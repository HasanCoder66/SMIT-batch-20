import React from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  // console.log("hello");

  let isLoggedInUser = false;

  let users = [
    {id : "00001", name: "abdullah", age: 22 },
    {id : "00002", name: "janii", age: 25 },
  ];


  let str = ["hello", "kesy ho..."]
  // if (!isLoggedInUser) {
  //   return <h1>Please Login...</h1>;
  // }

  return (
    <>
      {/*mapping */}

{str.map((item, idx) => (
  <p key={idx}>{item}</p>
) )}


      {/* navbar */}
      {/* section */}
      <section>
        <h2>This is Featured Products Section</h2>

        {/* <h2>{abc}</h2> */}
        {console.log(users)}
       {users && users.length > 0 && users.map((u, i) => (
         <Card data={u} key={i}/>
       ))}
      </section>

      {/* footer  */}
    </>
  );
};

export default App;
