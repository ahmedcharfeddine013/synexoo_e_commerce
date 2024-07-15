"use client";
import { getProductById, getProducts } from "@/lib/actions/product";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";

const Recommended = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return <section>{JSON.stringify(products)}</section>;
};

export default Recommended;
