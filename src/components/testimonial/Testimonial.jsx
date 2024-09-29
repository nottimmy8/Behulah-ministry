import React from "react";
import testimonialdata from "../../data/testimonialdata";

const Testimonial = () => {
  return (
    <div>
      <div className=" bg-tertiary container text-center mx-auto my-6">
        {/* header */}
        <h1 className="text-2xl font-bold">Testimonial</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {testimonialdata.map(({ id, description, name }) => {
            return (
              <div key={id} className=" w-full sm:w-1/3 md:w-1/4 my-6">
                <div className="max-w-[380px] text-center mx-auto shadow-lg p-4 bg-white">
                  <p className="text-lightblack mb-2">"{description}"</p>
                  <h1 className="text-lightsurp">{name}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
