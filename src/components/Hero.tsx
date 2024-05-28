"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerImages } from "@/constants";

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full h-screen justify-center">
      <CarouselItems />
    </div>
  );
}

function CarouselItems() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "bullets" }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[500px] w-full rounded-lg"
        >
          {bannerImages.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={product}
                  alt={index.toString()}
                  width={2000}
                  height={2000}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
