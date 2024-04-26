"use client";

import { CurrentUserContext } from "@/context/CurrentUserContext";
import { Channel } from "@prisma/client";
import { useContext } from "react";
import Avatar, { AvatarSize } from "../Avatar";
import { compactNumberFormat } from "@/utils/numUtils";
import Link from "next/link";
import Button from "../shared/Button";
import SubscribeButton from "../SubscribeButton";

interface ChannelHeaderProps {
  channel: Channel;
  videoCount: number;
}

const ChannelHeader: React.FC<ChannelHeaderProps> = ({
  channel,
  videoCount,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0  py-6 justify-between items-center lg:mt-[80px] lg:px-6">
      <div className="flex flex-col md:flex-row gap-0 md:gap-6 items-center md:items-start mt-28 sm:mt-28 lg:mt-0">
        <Avatar size={AvatarSize.large} imageSrc={channel.imageSrc} />
        <div className="flex flex-col pt-4 gap-4 md:gap-0">
          <h1 className="text-2xl text-center md:text-start font-semibold">
            {channel.name}
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-gray-500">
            <p className="font-medium text-black dark:text-white">{`@${channel.handle}`}</p>
          </div>
          <div className="flex space-around">
            <p className="mr-4 text-black dark:text-white">{`${compactNumberFormat(
              channel.subscriberCount
            )} Follower`}</p>
            <p className="text-black dark:text-white">{`${compactNumberFormat(
              videoCount
            )} Videos`}</p>
          </div>
        </div>
      </div>
      {channel.userId === currentUser?.id ? (
        <Link href={"/studio"} prefetch={true}>
          <Button
            type="primary"
            className="p-2 hover:opacity-70 cursor-pointer"
          >
            Mange Videos
          </Button>
        </Link>
      ) : (
        <SubscribeButton channelId={channel.id} />
      )}
    </div>
  );
};
export default ChannelHeader;
