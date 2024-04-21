"use client";
import { Brush, Home, PlusCircle } from "lucide-react";
import Link from "next/link";

import React from "react";

import { HiMiniUserGroup } from "react-icons/hi2";
import { PiArrowElbowLeftUpLight } from "react-icons/pi";

const items = [
  {
    logo: <Home />,
    text: "Home",
    url: "/",
  },

  {
    logo: <Brush />,
    text: "Studio",
    url: "/studio",
  },
  {
    logo: <PlusCircle />,
    text: "Add Videos",
    url: "studio/upload",
  },
  {
    logo: <HiMiniUserGroup />,
    text: "Communties",
    url: "https://inter-taupe.vercel.app",
  },
  {
    logo: <PiArrowElbowLeftUpLight />,
    text: "About",
    url: "/about",
  },
];

const LeftBar = () => {
  return (
    <div className="relative mr-[28px] max-md:hidden mt-10 ml-[28px]">
      <div>
        {items.map((item, index) => (
          <Link
            href={item.url}
            className="flex items-center gap-x-3 text-2xl opacity-80 hover:opacity-100 gap-6"
            key={index}
          >
            <div className="flex items-center gap-x-3 text-2xl my-5 opacity-80 hover:opacity-100 gap-6">
              {item.logo}
            </div>
            <span className="leading-none text-base flex gap-5 items-center p-4 rounded-md justify-start md:hidden lg:flex font-semibold">
              {" "}
              {item.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
