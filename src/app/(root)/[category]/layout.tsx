import { Navbar } from "@/components/layout/Navbar";

import Logo from "@/components/Logo";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Nav from "@/components/layout/Nav";
import PageHeader from "@/components/PageHeader";
import ShopByCategory from "@/components/ShopByCategory";
import Filter from "@/components/Filter";
import SearchProduct from "@/components/SearchProduct";
import Sort from "@/components/Sort";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center flex-col pt-24">
      <div className="flex flex-col items-center justify-between w-full">
        <Filter />
        <div className="flex flex-col md:flex-row  items-center justify-center gap-10 w-full">
          <SearchProduct />
          <Sort />
        </div>
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}
