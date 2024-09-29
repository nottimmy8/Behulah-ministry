import React from "react";
import Banner from "../mains/banner.png";

const Mains = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[600px] relative">
        <img
          className="w-full max-h-[600px] object-cover"
          src={Banner}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Mains;
