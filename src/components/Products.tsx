"use client";

import { product } from "@/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Loading from "./Loading";
import { formatCurrency, truncateString } from "@/lib/formatters";

export default function Products() {
  const [products, setProducts] = useState<product | null>();

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const data = res.data;
        setProducts(data);
      } catch (error) {
        console.log("Error fetching carousel items :", error);
      }
    };

    fetchCarouselItems();
  });

  if (!products)
    return (
      <div className="flex items-center justify-center ">
        <Loading />
      </div>
    );

  return (
    <div>
      <ProductsDisplay products={products} />
    </div>
  );
}

function ProductsDisplay({ products }: { products: product[] }) {
  return (
    <div className="grid grid-cols-3 gap-5 place-items-center">
      {products.map((product) => (
        <Card
          key={product.id}
          className="h-96 w-96 relative flex items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              height={200}
              width={200}
            ></Image>
          </div>
          <CardHeader className="absolute bottom-0 w-full flex items-start justify-start bg-white/90">
            <CardDescription>{truncateString(product.title, 40)}</CardDescription>
            <CardTitle className="text-red-500">
              {formatCurrency(product.price)}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
