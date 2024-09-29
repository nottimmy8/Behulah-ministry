import React from "react";
import Mapimg from "../locate/mapimg.png";

const Locate = () => {
  return (
    <div className=" w-full grid grid-cols-1 py-10">
      {/* head */}
      <div className=" text-center">
        <h1 className="font-bold text-2xl py-5">Locate Us</h1>
      </div>
      {/* image */}
      <div className=" container">
        {" "}
        <img className="  object-cover w-full " src={Mapimg} alt="" />
      </div>
    </div>
  );
};

export default Locate;
