"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { NavLink } from "./Navbar";
import { Heart, ShoppingCart } from "lucide-react";
import { Avatar } from "../ui/avatar";
import SocialMediaLinks from "../SocialMediaLinks";
import Link from "next/link";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside of the navbar
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setToggled(false);
      }
    };

    // Attach event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef} className="relative">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 fixed w-full z-50 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <div></div>
          <div onClick={() => setToggled(false)}>
            <Logo />
          </div>
          {/* <Button
            onClick={() => setToggled(!toggled)}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {toggled ? <X /> : <Menu />}
          </Button> */}
          <button
            onClick={() => setToggled(!toggled)}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm"
          >
            {toggled ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <div
        className={`flex absolute transition-all ease-in-out duration-300  ${
          toggled ? "z-10 left-0 " : "left-[-400px]"
        }`}
      >
        <div
          className="w-fit h-full bg-gray-50 flex flex-col items-center gap-6 justify-center fixed px-10"
          id="navbar-hamburger"
        >
          <div className="flex flex-col items-center justify-center gap-4 ">
            <NavLink href={"/shop"} onClick={() => setToggled(false)}>
              SHOP
            </NavLink>
            <NavLink
              href={`${"men's clothing"}`}
              onClick={() => setToggled(false)}
            >
              MEN
            </NavLink>
            <NavLink
              href={`${"women's clothing"}`}
              onClick={() => setToggled(false)}
            >
              WOMEN
            </NavLink>
            <NavLink
              href={`${"electronics"}`}
              onClick={() => setToggled(false)}
            >
              ELECTRONICS
            </NavLink>
            <NavLink href={`${"jewelery"}`} onClick={() => setToggled(false)}>
              JEWELERY
            </NavLink>
          </div>
          <div className="flex items-center flex-col gap-4 justify-center">
            <Heart />
            <ShoppingCart />
            <Button>
              {" "}
              <Link href={"/auth/signin"}>LOGIN</Link>
            </Button>
          </div>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
