import React from "react";
import Image from "next/image";
import { female_bg, male_bg } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="grid grid-cols-2 h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          src={male_bg}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="male"
        />
        <Link href="/shop/male">
          <button className="px-6 py-3  text-white text-2xl font-bold  hover:bg-black/50 duration-100 transition-all ease-in absolute inset-0 flex items-center justify-center">
            Shop Men's
          </button>
        </Link>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={female_bg}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="female"
        />
        <Link href="/shop/male">
          <button className="px-6 py-3  text-white text-2xl font-bold hover:bg-black/50 duration-100 transition-all ease-in absolute inset-0 flex items-center justify-center">
            Shop Women's
          </button>
        </Link>
      </div>
    </main>
  );
}
