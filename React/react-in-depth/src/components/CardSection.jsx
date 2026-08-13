import React from "react";
import Button from "./Button";


const data = [
    {
     id: 1111,
     title:"kuch biii"   ,
     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius explicabo dolores!",
     btnTitle : "Explore"
    },
    {
     id: 2222,
     title:"jani kia haiiinn, biii"   ,
     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius explicabo dolores!",
     btnTitle : "Explore"
    },
    {
     id: 333,
     title:"jani kia haiiinn, biii"   ,
     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius explicabo dolores!",
     btnTitle : "Explore"
    },
    {
     id: 444,
     title:"jani kia haiiinn, biii"   ,
     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius explicabo dolores!",
     btnTitle : "Explore"
    },
    {
     id: 555,
     title:"jani kia haiiinn, biii"   ,
     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius explicabo dolores!",
     btnTitle : "Explore"
    },
    {
     id: 666,
     title:"jani kia haiiinn, biii"   ,
     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius explicabo dolores!",
     btnTitle : "Explore"
    },
]


const CardSection = () => {
  return (
    <div className="p-3 mt-5 mb-5">
      <h2 className="font-bold text-2xl text-center mt-5 mb-5">
        This is Card Section
      </h2>
      <div className="flex flex-wrap gap-5 justify-center">
       {data.map((item) => (
         <Card key={item.id} data={item} >
            <p>hello!</p>
            <p>hello!</p>
            <p>hello!</p>
             </Card >
       ))}
      </div>
    </div>
  );
};

export default CardSection;



const Card = ({data, children}) => {

    // console.log(children);
    
  return (
    <div className="p-3 shadow-2xl rounded-2xl w-[300px] min-h-[250px] ">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/062/987/small/travel-to-the-beautiful-colorful-majestic-waterfall-in-national-park-forest-during-autumn-soft-water-of-the-stream-in-the-natural-park-photo.jpg"
        alt=""
        className="w-full h-[150px] rounded-2xl mt-2 mb-4 "
      />

      <h2 className="font-bold text-2xl">{data.title}</h2>
      <p className="font-semibold text-gray-600">
        {data.description}
      </p>

      <Button title={data.btnTitle} />

      {/* {children} */}
    </div>
  );
};
