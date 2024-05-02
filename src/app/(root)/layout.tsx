import { Navbar } from "@/components/Navbar";
import { NavLink } from "../../components/Navbar";
import Logo from "@/components/Logo";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <div className="flex flex-row items-center justify-center gap-4">
          <NavLink href={"/shop"}>SHOP</NavLink>
          <NavLink href={"/men"}>MEN</NavLink>
          <NavLink href={"/women"}>WOMEN</NavLink>
          <NavLink href={"/electronics"}>ELECTRONICS</NavLink>
          <NavLink href={"/jewelery"}>JEWELERY</NavLink>
        </div>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="flex items-center  gap-4 justify-end">
          <Heart />
          <ShoppingCart />
          <Avatar />
        </div>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  );
}
