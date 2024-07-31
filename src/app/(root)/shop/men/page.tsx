"use client";

import ProductCard from "@/components/product/ProductCard";
import { fetchMaleProducts } from "@/lib/actions/product";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MenShopPage = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchMaleProducts();
      setProducts(products);
    };

    getProducts();
  }, []);

  if (products)
    return (
      <div>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    );
};

export default MenShopPage;
