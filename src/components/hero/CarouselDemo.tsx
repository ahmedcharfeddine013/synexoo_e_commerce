import React, { useState } from "react";
import type { CarouselProps, RadioChangeEvent } from "antd";
import { Carousel, Radio } from "antd";
import { bannerImages } from "@/constants";
import Image from "next/image";

const CarouselDemo: React.FC = () => {
  return (
    <Carousel
      dotPosition={"bottom"}
      autoplay
      autoplaySpeed={3000}
      draggable
      infinite
      className="h-full w-full"
    >
      {bannerImages.map((banner, i) => (
        <div key={i} className="w-full items-center justify-center ">
          <Image
            src={banner}
            alt={i.toString()}
            width={1000}
            height={1000}
            className="w-full h-full "
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselDemo;
