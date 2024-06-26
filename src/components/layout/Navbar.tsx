"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode, useEffect, useState } from "react";

export function Navbar({ children }: { children: ReactNode }) {
  const [scrolling, setScrolling] = useState(false);
  const height = window.innerHeight;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full h-fit grid grid-cols-3 px-4 z-50 bg-primary text-white transition-all duration-100 ease-in ${
        scrolling ? "backdrop-blur-md bg-gray-400/50" : ""
      }`}
    >
      {children}
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
