import React from "react";
import navlistdata from "../../data/navlistdata";
import Navlistitems from "../../pages/Navlistitems";
import loadlogo from "../navbar/logoimg.png";

const Navbar = () => {
  return (
    <div
      className="w-full flex justify-between items-center py-3 px-6
     bg-white "
    >
      {/* logo */}
      <div>
        <img src={loadlogo} />
      </div>
      {/* navitems */}
      <div className="space-x-3 hidden text-sm md:text-sm sm:flex">
        {navlistdata.map((nav) => (
          <Navlistitems key={nav._id} nav={nav} />
        ))}
      </div>
      {/* joinusforworship */}
      <div>
        <button className=" border rounded-md px-5 py-1 font-bold text-1xl bg-green-800 text-white">
          Join us for worship
        </button>
      </div>
    </div>
  );
};

export default Navbar;
