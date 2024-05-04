import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency, truncateString } from "@/lib/formatters";
import { product } from "@/types/product";

export default function ProductDisplay({ product }: { product: product }) {
  return (
    <Card
      key={product.id}
      className="group h-72 w-72 lg:h-80 lg:w-80 relative flex items-center justify-center overflow-hidden"
    >
      <Link href={`/${product.catergory}/${product.id}`}>
        <div className="flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            height={200}
            width={200}
            className="group-hover:scale-110 duration-100 ease-in transition-all"
          ></Image>
        </div>
        <CardHeader className="absolute bottom-0 left-0 w-full bg-white/90">
          <div className="w-full flex-col gap-3 flex items-start justify-start">
            <CardDescription>
              {truncateString(product.title, 40)}
            </CardDescription>
            <CardTitle className="text-red-500">
              {formatCurrency(product.price)}
            </CardTitle>
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
}
