import { Navbar } from "@/components/Navbar";
import { NavLink } from "../../components/Navbar";
import Logo from "@/components/Logo";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Nav from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <div className="container">{children}</div>
    </>
  );
}
