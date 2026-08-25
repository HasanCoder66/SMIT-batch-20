import React from 'react'

const GalleryCard = ({data}) => {

  return (
   <div className='shadow-md bg-gray-700 rounded-2xl p-4 w-[300px] h-[250px] flex flex-col justify-around'>

  <div className=''>
    <img src={data.download_url} alt="" className='h-[150px] rounded-2xl' width={"300px"} height={"200px"} />
  </div>

  <h2 className="font-bold text-white text-center text-2xl">{data.author}</h2>
</div>
  )
}

export default GalleryCard