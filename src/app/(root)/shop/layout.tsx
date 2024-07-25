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
  return <div>{children}</div>;
}
