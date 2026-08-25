import React from 'react'

const Footer = ({setPage, setLimit}) => {
  return (
   <div className="bg-gray-700 shadow-2xl flex justify-between text-white font-semibold p-3">
        <div className="flex gap-5">
          <h1>Pages</h1>
          <div className="flex gap-4">
           { [1,2,3,4,5].map((num) => <button onClick={(e) => setPage(e.target.innerText)
           } className="cursor-pointer ">{num}</button>)}
            
          </div>
        </div>
        <select onChange={(e) => setLimit(e.target.value)
        } className="w-[100px] outline-none bg-gray-700">
          <option selected value="10">8</option>
          <option value="25">25</option>
          <option
            value="50
    "
          >
            50
          </option>
          <option value="100">100</option>
        </select>
      </div>
  )
}

export default Footer