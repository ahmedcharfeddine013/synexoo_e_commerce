import Filter from "@/components/Filter";
import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";
import SearchProduct from "@/components/SearchProduct";
import ShopByCategory from "@/components/ShopByCategory";
import Sort from "@/components/Sort";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex items-center justify-center flex-col pt-24">
        <PageHeader>SHOP</PageHeader>
        <ShopByCategory />
        <div className="flex flex-col items-center justify-between w-full">
          <Filter />
          <div className="flex flex-col md:flex-row  items-center justify-center gap-10 w-full">
            <SearchProduct />
            <Sort />
          </div>
          <div className="p-10">
            {children}
          </div>
        </div>
      </div>
    );
  }