"use client"

import React, { useEffect, useState } from 'react'

const page = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
console.log("use Effect is running!");

    }, [])
  return (
    <div>

        counter {count}

        <div>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count - 1)}>Dec</button>
        </div>
    </div>
  )
}

export default page