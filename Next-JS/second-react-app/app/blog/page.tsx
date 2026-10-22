// import Link from 'next/link';
// import React from 'react'

// const page =  async () => {

//     const response = await fetch(`https://dummyjson.com/products?limit=10`);
//     const {products} = await response.json()
//     console.log(products);


    
//   return (
//     <div className='flex flex-wrap gap-3'>

//         {products && products.length > 0 ? products.map((prod:any) => 

//            <Link key={prod.id} href={`/blog/${prod.id}`}> <Card data={prod} /></Link>
//          ): "" }
//     </div>
//   )
// }

// export default page



// function Card ({data}:any) {
//     return (
       
//          <div className='p-4 bg-red-300 rounded h-[200px] w-[250px]'>
// {data.title}
       
//        </div>
//     )
// }