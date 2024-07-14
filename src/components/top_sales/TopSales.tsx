import React from "react";
import { Button } from "../ui/button";

const TopSales = () => {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="flex items-center justify-center  lg:w-full">
        <div
          style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
          className="px-16 py-10 md:py-28 bg-no-repeat bg-cover relative bg-center w-full grid grid-cols-1 place-items-start lg:grid-cols-2 gap-10 before:w-full before:left-0 before:top-0 before:z-10 before:h-full before:absolute before:bg-black/40"
        >
          <h4 className="text-white flex items-center  text-xl font-bold z-20 ">
            Top Sales
          </h4>
          <div className="z-20 flex items-center md:justify-center">
            <Button className=" bg-white text-gray-900 rounded-[200px]   font-light hover:bg-gray-100">
              Show Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSales;
