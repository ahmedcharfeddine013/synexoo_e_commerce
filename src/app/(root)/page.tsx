import Hero from "@/components/hero/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import Subscribe from "@/components/subscribe/subscribe";
import NewArrivals from "../../components/new_arrivals/NewArrivals";
import TopSales from "@/components/top_sales/TopSales";
import ShopNow from "@/components/shop_now/ShopNow";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col items-center justify-center mt-20">
        <NewArrivals />
        <div className="md:grid md:grid-cols-2 pb-10 gap-10">
          <TopSales />
          <ShopNow />
        </div>
        <PageHeader>SHOP BY CATEGORY</PageHeader>
        <ShopByCategory />
        <Subscribe />
      </div>
    </main>
  );
}
