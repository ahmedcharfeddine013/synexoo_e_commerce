"use client";

import { product } from "@/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./ui/carousel";
import Carousel from "react-bootstrap/Carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import PageHeader from "./PageHeader";

export default function Hero() {
  const [carouselItems, setCarouselItems] = useState<product[] | null>();

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products/category/men's%20clothing"
        );
        const data = res.data;
        const sortedData = data.sort(
          (a: product, b: product) => b.rating.rate - a.rating.rate
        );
        setCarouselItems(sortedData);
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
    <div className="flex flex-col items-center h-screen justify-center gap-20">
      <PageHeader>TOP RATED</PageHeader>
      <CarouselItems products={carouselItems} />
    </div>
  );
}

function CarouselItems({ products }: { products: product[] }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <div className="p-1 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="h-[300px] w-[300px] object-contain"
            ></Image>
          </div>
          {/* left side  */}
          <Card className="border-none shadow-none">
            <CardHeader className="flex flex-col gap-5">
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {" "}
                <p>
                  Price: <span className="text-red-500">${product.price}</span>
                </p>
                <p>Rating : {product.rating.rate}</p>
                <Button asChild>
                  <Link href={`/product/${product.id}`}>EXPLORE ITEM</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
    // <Carousel className="w-full">
    //   <CarouselContent>
    //     {products.map((product) => (
    //       <CarouselItem
    //         key={product.id}
    //         className="grid grid-cols-1 md:grid-cols-2 place-items-center w-screen"
    //       >
    //         {/* Right side */}
    //         <div className="p-1 flex items-center justify-center">
    //           <Image
    //             src={product.image}
    //             alt={product.title}
    //             width={300}
    //             height={300}
    //             className="h-[300px] w-[300px] object-contain"
    //           ></Image>
    //         </div>
    //         {/* left side  */}
    //         <Card className="border-none shadow-none">
    //           <CardHeader className="flex flex-col gap-5">
    //             <CardTitle>{product.title}</CardTitle>
    //             <CardDescription>{product.description}</CardDescription>
    //           </CardHeader>
    //           <CardContent>
    //             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    //               {" "}
    //               <p>
    //                 Price:{" "}
    //                 <span className="text-red-500">${product.price}</span>
    //               </p>
    //               <p>Rating : {product.rating.rate}</p>
    //               <Button asChild>
    //                 <Link href={`/product/${product.id}`}>EXPLORE ITEM</Link>
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious className="border-none left-0  " />
    //   <CarouselNext className="border-none right-0" />
    // </Carousel>
  );
}
