"use client";
import { getRecommendedProducts } from "@/lib/actions/product";
import { Product } from "@/types/product";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../product/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Loading from "../Loading";

const Recommended = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    getRecommendedProducts().then((data) => {
      setProducts(data);
    });
  }, [products]);

  if (!products)
    return (
      <div className="py-10">
        <Loading />
      </div>
    );
  return (
    <section className="flex-1 flex gap-4 my-10 md:flex-row flex-col ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Recommended;
