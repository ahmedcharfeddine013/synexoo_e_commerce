import React from "react";
import Logo from "../Logo";
import SocialMediaLinks from "../SocialMediaLinks";

const Footer = () => {
  return (
    <div className="flex items-center flex-col bg-black text-white gap-5 justify-between border-t-2">
      <div className="grid grid-cols-4 p-20">
        <div>
          <Logo />
          <p>
            Threepo uses the TMDB Api and is not released under the MIT license.
          </p>
        </div>
        <div>© Designed and developed by Ahmed Charfeddine</div>
        <div></div>
      </div>
      <div className="py-3 border-y w-full">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default Footer;
