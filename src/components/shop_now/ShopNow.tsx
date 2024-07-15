import React from "react";
import { Button } from "../ui/button";

const ShopNow = () => {
  return (
    <section className="flex items-center justify-center w-full p-10 md:pr-10 md:p-0">
      <div className="flex items-center justify-center w-full">
        <div
          style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
          className="lg:p-28 p-10 bg-no-repeat bg-cover relative bg-top w-full grid grid-cols-1 md:grid-cols-2 gap-10 before:w-full before:left-0 before:top-0 before:z-10 before:h-full before:absolute before:bg-black/40"
        >
          <h4 className="text-white flex items-center  text-xl md:text-2xl font-bold z-20 ">
            SHOP
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

export default ShopNow;
