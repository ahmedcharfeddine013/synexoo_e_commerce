"use client";
import { getRecommendedProducts } from "@/lib/actions/product";
import { Product } from "@/types/product";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../product/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Recommended = () => {
  const [products, setProducts] = useState<Product[]>();
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(true);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    getRecommendedProducts().then((data) => {
      setProducts(data);
    });
  }, [products]);

  if (products)
    return (
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        className=" space-y-0.5 md:space-y-2 py-5 pl-3"
      >
        <div className="relative group md:-md-2">
          <ArrowLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />

          <div
            ref={rowRef}
            className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <ArrowRight
            className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
            onClick={() => handleClick("right")}
          />
        </div>
      </motion.div>
    );
};

export default Recommended;
