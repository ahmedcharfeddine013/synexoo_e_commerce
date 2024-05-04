"use client";

import Loading from "@/components/Loading";
import ProductDisplay from "@/components/Product";
import { product } from "@/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const [products, setProducts] = useState<product | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = res.data;
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.log(`Error fetching ${category} :`, error);
      }
    };

    fetchData()
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

export function ProductsDisplay({ products }: { products: product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {products.map((product) => (
        <ProductDisplay key={product.id} product={product} />
      ))}
    </div>
  );
}
