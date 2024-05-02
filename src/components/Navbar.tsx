"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode } from "react";

export function Navbar({ children }: { children: ReactNode }) {
  return (
    <nav className="flex items-center justify-around px-4">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return <Link {...props} />;
}
