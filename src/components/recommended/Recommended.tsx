"use client";
import { getProductById, getProducts } from "@/lib/actions/product";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import ProductCard from "../product/ProductCard";
import Loading from "../Loading";

const Recommended = () => {
  const [products, setProducts] = useState<Product[]>();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .then(() => {
        if (products) {
          const rp = products.slice(10, 13);
          setRecommendedProducts(rp);
          console.log(recommendedProducts);
        }
      });
  }, [products, recommendedProducts]);

  if (!recommendedProducts) return <Loading />;

  return (
    <section>
      {recommendedProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Recommended;
