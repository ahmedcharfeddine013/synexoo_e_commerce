import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";

export default function SocialMediaLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href=""
        className="border-2 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-900 duration-100 hover:text-white "
      >
        <Facebook />
      </a>
      <a
        href=""
        className="border-2 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-900 duration-100 hover:text-white "
      >
        <Instagram />
      </a>
      <a
        href=""
        className="border-2 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-900 duration-100 hover:text-white "
      >
        <Mail />
      </a>
    </div>
  );
}
