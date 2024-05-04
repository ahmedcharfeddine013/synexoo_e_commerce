import React from "react";
import PageHeader from "../../../components/PageHeader";
import ShopByCategory from "@/components/ShopByCategory";
import SearchProduct from "@/components/SearchProduct";
import Filter from "@/components/filter";
import Sort from "@/components/Sort";
import Products from "@/components/Products";

export default function ShopPage() {
  return (
    <div className="flex items-center justify-center flex-col pt-24">
      <PageHeader>SHOP</PageHeader>
      <ShopByCategory />
      <div className="flex flex-col items-start justify-between w-full">
        <Filter />
        <div className="flex  items-center justify-center gap-10">
          <SearchProduct />
          <Sort />
        </div>
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
}
