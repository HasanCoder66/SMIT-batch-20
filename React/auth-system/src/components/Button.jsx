import React from 'react'

const Button = ({title, handler}) => {
  return (
    <button onClick={handler} className='mt-4 bg-gray-900 rounded p-3 text-white font-bold cursor-pointer'>
      {title}
    </button>
  )
}

export default Button
