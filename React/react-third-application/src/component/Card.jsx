import React from 'react'

const Card = ({username, about}) => {
    console.log(username, about);
    
  return (
    <div>
      <h1>{username}</h1>
      <p>{about}</p>
    </div>
  )
}

export default Card
