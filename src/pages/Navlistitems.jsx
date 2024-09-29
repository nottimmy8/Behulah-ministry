import React from "react";
import { useNavigate } from "react-router-dom";

const Navlistitems = ({ nav }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (nav._id === 1) {
      navigate("/home");
    } else if (nav._id === 3) {
      navigate("/about");
    } else {
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {nav.name}
    </div>
  );
};

export default Navlistitems;
