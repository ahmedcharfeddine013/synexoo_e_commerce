"use client";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-2xl">
        <span className=" font-bold">EXTRA</span>MARKET
      </h1>
    </Link>
  );
}
