"use client";

import { product } from "@/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

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

    fetchCarouselItems();
  });

  if (carouselItems == null)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );

  return (
    <div className="flex items-center h-screen justify-center">
      <CarouselItems products={carouselItems} />
    </div>
  );
}

export function CarouselItems({ products }: { products: product[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="grid grid-cols-2 place-items-center w-screen"
          >
            {/* Right side */}
            <div className="p-1 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
              ></Image>
            </div>
            {/* left side  */}
            <Card>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>Price: ${product.price}</div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
