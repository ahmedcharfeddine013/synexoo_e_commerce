"use client";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="md:text-2xl text-lg">
        <span className=" font-bold">EXTRA</span>MARKET
      </h1>
    </Link>
  );
}
