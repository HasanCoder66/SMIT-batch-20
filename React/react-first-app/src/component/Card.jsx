// import React from 'react'

import React from "react"

// const Card = () => {
//     console.log("card component render howa...");
    
//   return (
//     <div>
//       This is Card Component
//     </div>
//   )
// }

// export default Card


const Card = React.memo(() => {
    console.log("card component render howa...");
return (

<>
<h1> card body </h1>

</>
)
})

export default Card