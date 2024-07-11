import React, { useState } from "react";
import type { CarouselProps, RadioChangeEvent } from "antd";
import { Carousel, Radio } from "antd";
import { bannerImages } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CarouselDemo: React.FC = () => {
  return (
    <div>
      <Carousel
        dotPosition={"bottom"}
        autoplay
        autoplaySpeed={3000}
        draggable
        infinite
        className="h-full w-full md:block hidden"
      >
        {bannerImages.map((banner, i) => (
          <div key={i} className="relative h-screen w-screen">
            <Image
              src={banner}
              alt={`banner-${i}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute bottom-48 left-10 flex items-start justify-center flex-col gap-4">
              <h1 className="text-white text-6xl font-bold">
                Sales Of the Summer Collection
              </h1>
              <Button className="bg-transparent flex items-start justify-center gap-2">
                {" "}
                <ArrowRight className="text-yellow-500 " />
                <p>Shop Now</p>
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
