import React from "react";
import PageHeader from "../../../components/PageHeader";
import ShopByCategory from "@/components/ShopByCategory";
import SearchProduct from "@/components/SearchProduct";

export default function ShopPage() {
  return (
    <div className="flex items-center justify-center flex-col pt-24">
      <PageHeader>SHOP</PageHeader>
      <ShopByCategory />
      <SearchProduct />
    </div>
  );
}
