import React from 'react'

// {username, about}
const Card = React.memo(() => {
    console.log("card rerender howa -->");
    
  return (
    <div>
      {/* <h1>{username}</h1>
      <p>{about}</p> */}
    </div>
  )
})

export default Card
