import React from "react";
import aboutimg from "../about/aboutimg.png";
const About = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
          {/* text */}
          <div className="max-w-[600px] p-5 text-left lg:col-span-2 lg:row-span-2 lg:px-10">
            <h1 className="font-bold text-2xl py-5">About us</h1>
            <p className="text-sm py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            <h2 className="py-1 text-green-600 font-bold">
              Our mission is to preach the word
            </h2>
            <h2 className="py-1 text-green-600 font-bold">
              Our vision is to spread the love of Jesus to all souls
            </h2>
            <button className="border-black">Learn more about us</button>
          </div>
          {/* image */}
          <div className=" shadow-lg max-w-[600px] rounded-xl lg:col-start-3 lg:row-start-1 lg:row-end-3 lg:flex lg:justify-center lg:items-center">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={aboutimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
