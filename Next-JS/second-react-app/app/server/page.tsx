import React from 'react'
import Navbar from '../component/Navbar';

const page = async () => {

    const response = await fetch(`https://dummyjson.com/users`);

    console.log(response);
    

  return (
    <div>
        <Navbar />

        this is a server component
    </div>
  )
}

export default page