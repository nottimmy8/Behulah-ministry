import React from "react";
import About from "../components/about/About";
import Scripture from "../components/scripture/Scripture";
import pastoratedata from "../data/pastoratedata";
import imgg1 from "../assets/imagejep.png";
const Aboutpage = () => {
  return (
    <div>
      <About />
      <div className=" text-center ">
        <h1 className=" font-bold text-2xl">We are Gloryland</h1>
        <Scripture />
      </div>
      <div className=" flex flex-col justify-center items-center text-center">
        <h1 className=" text-2xl font-bold">Meet the Pastorate</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {pastoratedata.map(({ id, title, name, image }) => {
            return (
              <div>
                <div key={id}>
                  <div>
                    <div>
                      <img src={imgg1} alt="" />
                    </div>
                    <h1> {name} </h1>
                    <p> {title} </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
