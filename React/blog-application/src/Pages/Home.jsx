import React from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'


import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';


const Home = () => {
    const [allBlogs, setAllBlogs] = React.useState([]);

    console.log(allBlogs);
    
      const getBlogsData = async () => {
    try {
      const q = query(collection(db, "blogs"));

      const querySnapshot = await getDocs(q);
   const blogs =  querySnapshot.docs.map((doc) => (
    {
        // doc.data() is never undefined for query doc snapshots
        
        // setAllBlogs(doc.data())
        id: doc.id,
        ...doc.data()
      }
   ));

   setAllBlogs(blogs);

    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getBlogsData();
  }, []);
  return (
    
    <>
    <Navbar />
  
  
<h1 className='font-bold text-2xl text-center  mt-5 underline'>All Blogs!</h1>

  <div className='flex flex-wrap justify-evenly gap-5 p-5'>

      {allBlogs.length > 0 ? allBlogs.map((blog) => (<BlogCard setAllBlogs={setAllBlogs} getBlogsData={getBlogsData}  data={blog} />)) : "blog finding"}


  </div>
  
  </>
  )
}

export default Home