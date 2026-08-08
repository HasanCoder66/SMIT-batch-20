import React from "react";
// style={{
//             padding:"10px",
//             borderRadius:"10px",
//             width:"300px",
//             height:"150px"
//         }}

const Card = ({data}) => {

    console.log(data);
    
    let status = "pending";

    return (
        // <div className={`${status ? "bg-green" : "bg-red p-5"}`} >
        <div className={`${status == "pending" ? "bg-yellow" : `${status ? "bg-green" : "bg-red"} `}`} >
            <h2>{data.name}</h2>
            <p>{data.age}
            </p>

            <button>{`${status == true ? "Ok" : `${status == "pending" ? "loading": "kuch biii"}`}`}</button>
        </div>
    )
}


export default Card



// ternary operator

// condition ? pehla wala: 

// status ? "bg-green" : ""