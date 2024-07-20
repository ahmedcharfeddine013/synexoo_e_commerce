"use client";
import { getProductById, getProducts } from "@/lib/actions/product";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";

const Recommended = () => {
  const [products, setProducts] = useState<Product[]>();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .then(() => {
        if (products) {
          console.log(products);
          const rp = products.slice(0, 3);
          setRecommendedProducts(rp);
        }
      });
  }, [products]);

  return <section>{JSON.stringify(recommendedProducts)}</section>;
};

export default Recommended;
