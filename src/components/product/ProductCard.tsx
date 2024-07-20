import { Product } from "@/types/product";
import React from "react";
import Image from "next/image";
import { Card } from "../ui/card";

const ProductCard = ({ product }: { product: Product }) => {
  const imageUrl = product.images[0]?.replace(/[\[\]]/g, "").replace(/\"/g, "");

  return (
    <Card>
      <div>
        <Image src={imageUrl} alt={product.title} height={300} width={300} />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
