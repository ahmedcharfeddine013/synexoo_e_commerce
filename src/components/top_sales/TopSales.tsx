import React from "react";
import { Button } from "../ui/button";

const TopSales = () => {
  return (
    <section className="flex items-center justify-center w-full p-10 md:pl-10 md:p-0">
      <div className="flex items-center justify-center w-full">
        <div
          style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
          className="lg:p-28 p-10 bg-no-repeat bg-cover relative bg-center w-full grid grid-cols-1 md:grid-cols-2 gap-10 before:w-full before:left-0 before:top-0 before:z-10 before:h-full before:absolute before:bg-black/40"
        >
          <h4 className="text-white flex items-center  text-xl md:text-2xl font-bold z-20 ">
            TOP SALES!
          </h4>
          <div className="z-20 flex items-center md:justify-center">
            <Button className="lg:p-8 bg-white text-gray-900 rounded-[200px]  lg:text-xl font-light hover:bg-gray-100">
              Show Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSales;
