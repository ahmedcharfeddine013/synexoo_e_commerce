"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { NavLink } from "./Navbar";
import { Heart, ShoppingCart } from "lucide-react";
import { Avatar } from "./ui/avatar";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="relative">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 fixed w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <div></div>
          <div>
            <Logo />
          </div>
          <Button
            onClick={() => setToggled(!toggled)}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </Button>
        </div>
      </nav>
      <div
        className={`flex absolute transition-all ease-in duration-100  ${
          toggled ? "z-10 left-0 " : "left-[-400px]"
        }`}
      >
        <div
          className="w-fit h-full bg-gray-50 flex flex-col items-center gap-6 justify-center fixed px-10"
          id="navbar-hamburger"
        >
          <div className="flex flex-col items-center justify-center gap-4 ">
            <NavLink href={"/shop"}>SHOP</NavLink>
            <NavLink href={`${"men's clothing"}`}>MEN</NavLink>
            <NavLink href={`${"women's clothing"}`}>WOMEN</NavLink>
            <NavLink href={`${"electronics"}`}>ELECTRONICS</NavLink>
            <NavLink href={`${"jewelery"}`}>JEWELERY</NavLink>
          </div>
          <div className="flex items-center flex-col gap-4 justify-center">
            <Heart />
            <ShoppingCart />
            <Avatar />
          </div>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}

// function toggledList() {
//   return (

//   );
// }
