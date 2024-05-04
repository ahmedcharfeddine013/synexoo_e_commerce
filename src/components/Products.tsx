"use client";

import { product } from "@/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Loading from "./Loading";
import { formatCurrency, truncateString } from "@/lib/formatters";
import Link from "next/link";
import ProductDisplay from "./Product";

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
      <div className="flex items-center justify-center h-48 ">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {products.map((product) => (
        <ProductDisplay key={product.id} product={product} />
      ))}
    </div>
  );
}
