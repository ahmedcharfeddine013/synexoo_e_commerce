"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import PageHeader from "../../../../components/PageHeader";
import SimilarProducts from "@/components/SimilarProducts";

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<product | null>();
  const [similarProducts, setSimilarProducts] = useState<product[] | null>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const data = res.data;
        setProduct(data);
      } catch (error) {
        console.log("Error fetching your product : ", error);
      }
    };

    fetchProduct();
  });

  if (!product)
    return (
      <div className="flex items-center justify-center h-48 ">
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen place-items-center">
        <div className="pt-20 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="h-[300px] w-[300px] object-contain"
          ></Image>
        </div>
        {/* left side  */}
        <Card className="border-none shadow-none">
          <CardHeader className="flex flex-col gap-5">
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {" "}
              <p>
                Price: <span className="text-red-500">${product.price}</span>
              </p>
              <p>Rating : {product.rating.rate}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center flex-col gap-10">
        <PageHeader>Similar Products</PageHeader>
        <SimilarProducts product={product} />
      </div>
      <div className="flex items-center justify-center py-10 ">
        <Button>
          <Link href={`/${product.category}`}>Discover Category</Link>
        </Button>
      </div>
    </div>
  );
}
