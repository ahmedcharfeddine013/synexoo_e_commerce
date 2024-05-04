import React, { useEffect, useState } from "react";
import { product } from "../types/product";
import axios from "axios";
import ProductDisplay from "./Product";

export default function SimilarProducts({ product }: { product: product }) {
  const [similarProducts, setSimilarProducts] = useState<product[] | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${product.category}`
        );
        const data = res.data;
        // Filter out the current product
        const filteredData = data
          .filter((pr: product) => pr.id !== product.id)
          .slice(0, 3);
        setSimilarProducts(filteredData);
        // console.log(similarProducts)
      } catch (error) {
        console.log(error);
        // Handle error here, maybe set similarProducts to null or show an error message
      }
    };
    fetchData();
  }, [product]);

  if (!similarProducts) return <p>No Similar products</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {similarProducts.map((product) => (
        <ProductDisplay key={product.id} product={product} />
      ))}
    </div>
  );
}
