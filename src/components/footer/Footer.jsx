import React from "react";
import Frameimg12 from "../footer/frame12.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" w-full mx-auto p-4 bg-lightboder ">
      <div className="container flex justify-between items-center ">
        {/*  */}
        <div className=" flex justify-center items-center">
          <img src={Frameimg12} alt="" />
          <p>
            Glorious Hephzibah Beulah Ministry <br /> © 2024 All rights reserved
          </p>
        </div>
        {/*  */}
        <div>
          <p>Phone:</p>
          <p>Email:</p>
          <p>Address:</p>
        </div>
        {/* social icons */}
        <div className=" flex justify-center gap-2">
          <IoLogoInstagram size={30} />
          <FaFacebookSquare size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
