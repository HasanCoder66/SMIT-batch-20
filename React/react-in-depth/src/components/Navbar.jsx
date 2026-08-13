import React from 'react'

const Navbar = React.memo(() => {
  console.log("Navbar component haii..");
  
  return (
    <div className='p-4 rounded-2xl shadow-2xl h-[70px] flex items-center justify-between'>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqKVew0GclM-I5hSAkBy7QbQREK3xmuGa4b9ioSLy5tQ&s" className='w-[250px] h-[50px]' alt="This is a Logo" />
      </div>

<HeaderList />
       
    </div>
  )
})

export default Navbar




const HeaderList = () => {
    const listItems = ["Home", "About", "Contact", "Services",]
    return(
         <ul className='flex gap-5'>
           
           {/* {listItems.map((item) =>  <li className='font-semibold  cursor-pointer'>{item} </li> )} */}
           {listItems.map((item, idx) =>  (<li key={idx} className='font-semibold  cursor-pointer'>{item} </li>) )}
           
        </ul>
    )
}