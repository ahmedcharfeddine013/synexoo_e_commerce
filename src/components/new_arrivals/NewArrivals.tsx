import React from "react";
import { Button } from "../ui/button";

const NewArrivals = () => {
  return (
    <section className="flex items-center justify-center w-full p-10">
      <div className="flex items-center justify-center w-full">
        <div
          style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
          className="p-10 md:p-28 bg-no-repeat bg-cover relative bg-center w-full grid grid-cols-1 md:grid-cols-2 gap-10 before:w-full before:left-0 before:top-0 before:z-10 before:h-full before:absolute before:bg-black/40"
        >
          <h4 className="text-white flex items-center  text-xl md:text-3xl font-bold z-20 ">
            NEW ARRIVALS ARE NOW IN!
          </h4>
          <div className="z-20 flex items-center md:justify-center">
            <Button className="md:p-8 bg-white text-gray-900 rounded-[200px] md:text-xl font-light hover:bg-gray-100">
              Show Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
