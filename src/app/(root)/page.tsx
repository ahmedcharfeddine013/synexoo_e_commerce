import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col items-center justify-center">
        <PageHeader>SHOP BY CATEGORY</PageHeader>
        <ShopByCategory />
      </div>
    </main>
  );
}
