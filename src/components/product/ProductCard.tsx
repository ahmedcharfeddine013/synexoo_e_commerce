import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { Card } from "antd";
import { formatCurrency, truncateString } from "@/lib/formatters";
import Link from "next/link";
const { Meta } = Card;

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`}>
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
          description={formatCurrency(product.price)}
        />
      </Card>
    </Link>
  );
};

export default ProductCard;
