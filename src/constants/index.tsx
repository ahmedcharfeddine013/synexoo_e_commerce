import { FacebookIcon, InstagramIcon } from "lucide-react";
import { Mail } from "lucide-react";

// import banner_1 from "../../public/assets/1.jpg";
// import banner_2 from "../../public/assets/2.png";
// import banner_3 from "../../public/assets/3.webp";

import banner_1 from "../../public/images/slide-1.jpg";
import banner_2 from "../../public/images/slide-2.jpg";

import male_bg from "../../public/images/shop/male-bg.jpg";
import female_bg from "../../public/images/shop/female-bg.jpg";

export const SocialMediaLinks = [
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    link: "",
  },
  {
    title: "Facebook",
    icon: <FacebookIcon />,
    link: "",
  },
  {
    title: "Gmail",
    icon: <Mail />,
    link: "",
  },
];

export const bannerImages = [banner_1, banner_2];

export const categories = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-dresses",
  "womens-shoes",
  "womens-bags",
  "womens-watches",
  "womens-jewellery",
  "sunglasses",
];

export { male_bg, female_bg };
