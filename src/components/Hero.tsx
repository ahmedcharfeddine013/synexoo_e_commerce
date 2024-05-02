"use client";

import { product } from "@/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Hero() {
  const [carouselItems, setCarouselItems] = useState<product[] | null>();

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setCarouselItems(res.data);
      } catch (error) {
        console.log("Error fetching carousel items :", error);
      }
    };

    fetchCarouselItems()
  });

  if (carouselItems == null)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );

  return <div></div>;
}


