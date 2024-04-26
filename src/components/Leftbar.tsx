"use client";
import getCurrentSubscription from "@/actions/getCurrentSubscriptions";
import { CurrentUserContext } from "@/context/CurrentUserContext";
import { Channel } from "@prisma/client";
import { Brush, Home, PlusCircle } from "lucide-react";
import Link from "next/link";

import React, { useContext } from "react";

import { HiMiniUserGroup } from "react-icons/hi2";
import { PiArrowElbowLeftUpLight } from "react-icons/pi";
import { TbEggCracked } from "react-icons/tb";

import Avatar, { AvatarSize } from "./Avatar";
import MenuItems from "./MenuItems";

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
  {
    logo: <TbEggCracked />,
    text: "New Add",
    url: "/creator",
  },
];
interface SideBarProps {
  subscribedChannels: Channel[];
}

const LeftBar: React.FC<SideBarProps> = ({ subscribedChannels }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="relative mr-[28px] max-md:hidden mt-10 ml-[28px]">
      <div>
        {items.map((item, index) => (
          <Link
            href={item.url}
            className="flex items-center gap-x-3 text-2xl opacity-80 hover:scale-105 transform transition gap-6"
            key={index}
            prefetch={true}
          >
            <div className="flex items-center gap-x-3 text-2xl my-5 opacity-80 hover:opacity-100 gap-6">
              {item.logo}
            </div>
            <span className="leading-none text-base flex gap-5 items-center p-4 rounded-md justify-start md:hidden lg:flex font-semibold transition-all">
              {" "}
              {item.text}
            </span>
          </Link>
        ))}
      </div>
      {currentUser ? (
        <div className="pt-3">
          {subscribedChannels.map((subscribedChannels) => {
            return (
              <MenuItems
                channel={subscribedChannels}
                key={subscribedChannels.id}
                label={subscribedChannels.name}
                logo={
                  <Avatar
                    imageSrc={subscribedChannels.imageSrc}
                    size={AvatarSize.extra}
                  />
                }
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default LeftBar;
