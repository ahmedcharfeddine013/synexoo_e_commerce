"use client";
import { getRecommendedProducts } from "@/lib/actions/product";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import ProductCard from "../product/ProductCard";

const Recommended = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    getRecommendedProducts().then((data) => {
      setProducts(data);
    });
  }, [products]);

  return (
    <section>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {/* {JSON.stringify(products)} */}
    </section>
  );
};

export default Recommended;
