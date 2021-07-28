import React from "react";

const ThreeLineDate = ({ dateString, className }) => {
  return (
    <div className={`md:flex-shrink-0 w-12 mr-2 ${className}`}>
      <div className="text-5xl text-right text-black">
        {dateString.split(" ")[0]}
      </div>
      <div className="font-medium uppercase text-right text-black">
        {dateString.split(" ")[1]}
      </div>
      <div className="font-medium text-right text-black">
        {dateString.split(" ")[2]}
      </div>
    </div>
  );
};

export default ThreeLineDate;
