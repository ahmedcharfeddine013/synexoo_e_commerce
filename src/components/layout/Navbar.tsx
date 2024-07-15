"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Logo from "../Logo";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";

export function Navbar() {
  const [toggled, setToggled] = useState(false);

  useGSAP(() => {
    if (!toggled) {
      gsap.to("#mobile_links", {
        opacity: 0,
        x: -300,
        duration: 0.5,
      });
    }
    if (toggled) {
      gsap.to("#mobile_links", {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [toggled]);

  return (
    <nav className="py-3 text-white flex w-full h-20 flec items-center fixed lg:top-0 justify-between px-6 md:px-20 bg-transparent z-50">
      <div className="flex items-center justify-between w-full gap-10 relative">
        <div>
          <Logo />
        </div>
        <div className="items-center justify-center gap-4 hidden lg:flex">
          <NavLink href={"/shop"}>Shop</NavLink>
          <NavLink href={"/about"}>About Us</NavLink>
          <NavLink href={"/contact"}>Contact Us</NavLink>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <Search />
          <ShoppingCart />
          <User className="lg:block hidden" />
          <Button
            className="p-0 bg-transparent h-8 w-8 lg:hidden hover:bg-gray-800"
            onClick={() => setToggled(!toggled)}
          >
            <Menu className="w-6 h-6 " />
          </Button>
        </div>
        <div
          id="mobile_links"
          className="items-start justify-start gap-4 flex lg:hidden absolute -top-7 h-screen bg-white text-lg text-primary  flex-col p-10 -left-10 md:-left-20 shadow-md z-50 -translate-x-60 opacity-0"
        >
          <NavLink href={"/shop"}>Shop</NavLink>
          <NavLink href={"/about"}>About Us</NavLink>
          <NavLink href={"/contact"}>Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <div className="relative link">
      <Link {...props} />
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all duration-300"></span>
    </div>
  );
}
