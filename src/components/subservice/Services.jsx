import React from "react";
import img1 from "../subservice/ccc.png";
import img2 from "../subservice/aaa.png";
import img3 from "../subservice/ddd.png";
import img4 from "../subservice/bbc.png";

const servicedata = [
  {
    id: 1,
    title: "Mercy Land",
    text: "Every Wednesday",
    image: img1,
  },
  {
    id: 2,
    title: "Mercy Land",
    text: "Every Wednesday",
    image: img2,
  },
  {
    id: 3,
    title: "Mercy Land",
    text: "Every Wednesday",
    image: img3,
  },
  {
    id: 4,
    title: "Mercy Land",
    text: "Every Wednesday",
    image: img4,
  },
];

const Services = () => {
  return (
    <div className="bg-tertiary py-14">
      <div className="container mx-auto lg:px-24">
        <h1 className="text-center text-2xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" text-center ">
            <p className="text-1xl font-bold mb-3">Weekly Programs</p>
            <div className="col-span-1 relative shadow-lg rounded-sm">
              <img
                src={img1}
                alt="Image 1"
                className="h-[400px] w-full object-cover rounded-sm"
              />
              <div className="absolute top-0 left-0  w-full h-full  text-white p-4  bg-primary/80 opacity-50">
                <div className=" flex flex-col  items-center h-full   ">
                  <h2 className=" font-bold">Mercy Land</h2>
                  <p>Every Wednesday</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <p className="text-1xl font-bold mb-3">Monthly Programs</p>
            <div className="col-span-1 relative shadow-lg rounded-sm">
              <img
                src={img2}
                alt="Image 2"
                className="h-[400px] w-full object-cover rounded-sm"
              />
              <div className="absolute top-0 left-0  w-full h-full  text-white p-4  bg-primary/80 opacity-50">
                <div className=" flex flex-col  items-center h-full ">
                  <h2 className=" font-bold">Marathon with the Lord`</h2>
                  <p>Every last Thursday and Friday of the month</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <p className="text-1xl font-bold mb-3">Yearly Programs</p>
            <div className="col-span-1 grid grid-rows-2 gap-4">
              <div className=" relative rounded-sm shadow-lg">
                <img
                  src={img3}
                  alt="Image 3"
                  className="h-[190px] w-full object-cover rounded-sm"
                />
                {/*  */}
                <div className="absolute top-0 left-0  w-full h-full flex flex-col justify-center  text-white p-4  bg-primary/80 opacity-50">
                  <h2 className=" font-bold">48 hours with the Lord</h2>
                  <p>Every 3rd Friday to Sunday of June</p>
                </div>
              </div>
              {/*  */}
              <div className=" relative  shadow-lg rounded-sm">
                <img
                  src={img4}
                  alt="Image 4"
                  className="h-[190px] w-full object-cover rounded-sm "
                />
                {/*  */}
                <div className=" absolute top-0 left-0  w-full h-full flex flex-col justify-center  text-white p-4  bg-primary/80 opacity-50">
                  <h2 className=" font-bold">Mountain top prayer</h2>
                  <p>Second Friday of January, April, July and October</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
