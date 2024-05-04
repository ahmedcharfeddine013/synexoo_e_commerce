import React from "react";
import { categoryLinks } from "@/types/category";
import PageHeader from "./PageHeader";
import { Card } from "./ui/card";
import Link from "next/link";

export default function ShopByCategory() {
  return (
    <div className="flex items-center justify-center flex-col py-10 gap-10">
      {/* <PageHeader>SHOP BY CATEGORY</PageHeader> */}
      <div className="flex items-center flex-col md:flex-row justify-center gap-4">
        {categoryLinks.map((category) => (
          <Link
            key={category.category}
            href={category.link}
          >
            <Card className="p-10">{category.category}</Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
