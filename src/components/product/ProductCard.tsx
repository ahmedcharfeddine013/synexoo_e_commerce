import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { Card } from "antd";
import { truncateString } from "@/lib/formatters";
const { Meta } = Card;

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          alt={product.title}
          src={product.thumbnail}
          height={300}
          width={300}
        />
      }
    >
      <Meta
        title={product.title}
        description={truncateString(product.description, 25)}
      />
    </Card>
  );
};

export default ProductCard;
