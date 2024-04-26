import React from "react";
import { Brush, Heart, Home, Upload } from "lucide-react";
import Link from "next/link";

import { HiMiniUserGroup } from "react-icons/hi2";
import { PiArrowElbowLeftUpLight } from "react-icons/pi";
import { TbEggCracked } from "react-icons/tb";

const items = [
  {
    logo: <Home />,

    url: "/",
  },
  {
    logo: <Brush />,

    url: "/studio",
  },
  {
    logo: <Upload />,

    url: "studio/upload",
  },

  {
    logo: <HiMiniUserGroup />,

    url: "https://inter-taupe.vercel.app",
  },

  {
    logo: <TbEggCracked />,
    url: "/creator",
  },
];

const Footer = () => {
  return (
    <div
      className={`fixed bottom-0 flex justify-center w-full container z-10 bg-zinc-50 shadow-md dark:bg-gray-800 md:hidden mt-10`}
    >
      <div className="flex justify-between md:hidden">
        {items.map((item, index) => (
          <Link
            href={item.url}
            className="flex ml-5 mr-5"
            key={index}
            prefetch={true}
          >
            <div className="flex  items-center gap-x-3  text-2xl my-5 opacity-80 hover:opacity-100 gap-6">
              <div className="flex">{item.logo}</div>
            </div>
          </Link>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
