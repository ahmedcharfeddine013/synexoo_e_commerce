import React from "react";
import Products from "@/components/Products";
import Image from "next/image";

export default function ShopPage() {
  return (
    <main>
      <div>
        <Image src={'/images/shop/female-bg'} fill alt="women" />
      </div>
    </main>
  );
}
