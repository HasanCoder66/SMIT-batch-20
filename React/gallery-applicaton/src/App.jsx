import React, { useEffect, useState } from "react";
import GalleryCard from "./components/GalleryCard";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);


  console.log("limit -->",limit);
  
  const getData = async () => {
    try {
      const result = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
      );

      console.log(result.data);
      setData(result.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page,limit]);


  return (
    <div className="flex justify-between flex-col h-screen bg-black ">
      {/* header */}

      <div className="bg-gray-700 shadow-2xl">
        <h1 className="font-bold p-3 text-white text-2xl pl-5">Gallery App</h1>
      </div>

      {/* main body */}

      <div className="cardParent p-5 flex gap-5 justify-around flex-wrap overflow-y-auto">
        {/* gallery card*/}

        {data.length > 0 ? (
          data.map((item) => <GalleryCard data={item} />)
        ) : (
          <p className="text-white font-bold text-center">Loading...</p>
        )}
      </div>

      {/* footer */}
      <Footer setPage={setPage}  setLimit={setLimit}/>
    </div>
  );
};

export default App;
