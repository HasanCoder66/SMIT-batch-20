import React from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'


import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';


const Home = () => {
    const [allBlogs, setAllBlogs] = React.useState([]);

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

   setAllBlogs(blogs)
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getBlogsData();
  }, []);
  return (
  // <Navbar />

  <>
  <div className='flex flex-wrap justify-between gap-5'>

    {allBlogs.length > 0 ? allBlogs.map((blog) => (<BlogCard />)) : "blog finding"}

  </div>
  
  </>
  )
}

export default Home