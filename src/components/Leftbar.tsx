"use client";
import { Brush, Heart, Home, PlusCircle, SubscriptIcon } from "lucide-react";
import Link from "next/link";
import { BsPersonVideo3 } from "react-icons/bs";

import React from "react";

import { MdSubscriptions, MdWifiChannel } from "react-icons/md";
import MenuItem from "./MenuItem";
import { PiSignOut } from "react-icons/pi";
import { signOut } from "next-auth/react";

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
    logo: <MdSubscriptions />,
    text: "Subscription",
    url: "/subscriptions",
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
