import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import axios from 'axios'

const Home = () => {

    // states  best location..
const [users, setUsers] = useState([])
// const [count, setUsers] = useState(0)
// const [profiles, setUsers] = useState([])
// const [jobs, setUsers] = useState([])
// const [admin, setUsers] = useState(false)
// const [isLoggedIn, setUsers] = useState(null)
// const [loading, setUsers] = useState(false)
// const [error, setUsers] = useState("")


// functions 

// function loading () {
//     console.log("loading...");
    
// }

// loading()

// useEffect best location...

const getData = async () => {
     let result = await axios.get("https://dummyjson.com/users")
    console.log(result);
    
    
    setUsers(result.data.users);
}


useEffect(() => {
    console.log("use effect chalaaa -->");
    
     getData()
    
    }, [])
    


// useEffect(() => {}, [])
  return (
    <div>
      <div className='p-4 shadow-md mb-4'>
<h1>This is a Dashboard</h1>
      </div>

      <div className='flex justify-evenly gap-5 flex-wrap'>
    {users.map((user) => (<Card key={user.id} data={user} />))}
</div>
    </div>
  )
}

export default Home
