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
import CarouselDemo from "./CarouselDemo";

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full h-screen justify-start overflow-hidden">
      <CarouselItems />
    </div>
  );
}

function CarouselItems() {
  return (
    <section className="w-screen h-[80%] overflow-hidden">
      <CarouselDemo />
    </section>
  );
}
