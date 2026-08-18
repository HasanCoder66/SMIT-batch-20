import React from 'react'

const Card = ({data}) => {
    console.log(data);
    
  return (
    <div className='p-4 shadow-2xl rounded-2xl h-[150px] w-[350px] flex flex-col justify-center'>
      
<h1>Username : {data.username}</h1>
<p>Email : {data.email}</p>
<p>Age : {data.age}</p>
<p>Password : {data.password}</p>
    </div>
  )
}

export default Card
