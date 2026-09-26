// import React, { useEffect } from "react";
// import UserCard from "./components/UserCard";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUsersFailure, getAllUsersSuccess, getAllUserStart, getAllUserThunk } from "./features/users/users";
// import axios from "axios";

// const App = () => {
//   let {users, loading, error} = useSelector((state) => state.user);
//   console.log(users);
  
// const dispatch = useDispatch()

//   const getUsersData = async () => {
//     dispatch(getAllUserThunk())
//   }


//   useEffect(() => {
//     getUsersData()
//   }, [])

//   return (
//     <div className="bg-[#2a2a2a] h-screen">
//       <h1 className="text-white">All Users</h1>

//       <div className="flex flex-wrap justify-around">
//         {users && users.length > 0 ? users.map((u, idx) => <UserCard key={idx} user={u} />) : <p>user no found</p> }

//       </div>
//     </div>
//   );
// };

// export default App;





import React, { memo, useCallback, useMemo, useState } from 'react'

const App = () => {

  const [state, setState] = useState(true)
  const [count, setCount] = useState(0);

 let user = useMemo(() => {
    return {
    name : "hasan ashraf"
  }
  }, [])


  const foo = useCallback(() => {
    console.log("log ker raha hon..");
    
  } , [])

  console.log("app component chalaa -->");
  
  return (
    <>
    <div>App</div>

<button onClick={() => setState(!state)}>update state</button>
<button onClick={() => setCount(count + 1)}>update count</button>

<br />
    <Home handler={foo} data={user} />
    <About />
    </>
  )
}

export default App




const Home = memo(( ) => {

  console.log("home component chalaa -->");

  // for(let i = 0 ; i < 100000; i++){
  //   console.log(i);
    
  // }
  
  return (
    <>Home</>
  )
})


const About =( ) => {

  console.log("About component chalaa -->");
  
  return (
    <>About</>
  )
}