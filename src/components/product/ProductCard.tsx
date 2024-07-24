import React from "react";
import Image from "next/image";
import { Card } from "../ui/card";
import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <div>
        <Image
          src={product.images[0]}
          alt={product.title}
          height={300}
          width={300}
        />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
