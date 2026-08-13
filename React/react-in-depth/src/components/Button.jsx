import React from 'react'

const Button = ({title, handler}) => {
    console.log("button component haii..");
  return (
    <button onClick={handler} className='p-2 cursor-pointer bg-black rounded-2xl text-white w-[150px] font-bold mt-3 mb-3'>{title}</button>
  )
}

export default Button
