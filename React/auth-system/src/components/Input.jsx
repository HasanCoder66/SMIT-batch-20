import React from "react";

const Input = ({placeholder , handler, type}) => {
  return (
    <div className="">
      <input type={type} placeholder={placeholder} onChange={(e) => handler(e.target.value, type)}/>
    </div>
  );
};

export default Input;
