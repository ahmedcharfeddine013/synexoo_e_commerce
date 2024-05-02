import { Navbar } from "@/components/Navbar";
import { NavLink } from "../../components/Navbar";
import Logo from "@/components/Logo";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container my-6">
        <Navbar>
          <div className="flex flex-row items-center gap-4">
            <NavLink href={"/men"}>MEN</NavLink>
            <NavLink href={"/women"}>WOMEN</NavLink>
            <NavLink href={"/electronics"}>ELECTRONICS</NavLink>
            <NavLink href={"/jewelery"}>JEWELERY</NavLink>
          </div>
          <div>
            <Logo />
          </div>
          <div>
            
          </div>
        </Navbar>
        {children}
      </div>
    </>
  );
}
