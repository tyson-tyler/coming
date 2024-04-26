"use client";

import { CurrentUserContext } from "@/context/CurrentUserContext";
import { Channel, Video } from "@prisma/client";
import { useContext } from "react";
import LikeDisLikePage from "./LikeDisLikePage";
import Link from "next/link";
import Avatar, { AvatarSize } from "@/components/Avatar";
import { compactNumberFormat } from "@/utils/numUtils";
import SubscribeButton from "@/components/SubscribeButton";
import Button from "@/components/shared/Button";
import LikeDisLikeButton from "../LikeDisLikeButton";

interface LikeSubscribePageProps {
  channel: Channel;
  video: Video;
}
const LikeSubscribePage: React.FC<LikeSubscribePageProps> = ({
  video,
  channel,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link href={`/channel/${channel.id}`} prefetch={true}>
            <Avatar size={AvatarSize.extra} imageSrc={channel.imageSrc} />
          </Link>
          <div className="flex flex-col justify-between mr-2">
            <Link href={`/channel/${channel.id}`} prefetch={true}>
              <h2 className="text-lg font-semibold">{channel.name}</h2>
            </Link>
            <p className="text-sm text-gray-500">
              {compactNumberFormat(channel.subscriberCount)} Followers
            </p>
          </div>
        </div>
        <div>
          {" "}
          {channel.userId === currentUser?.id ? (
            <Link href="/studio" prefetch={true}>
              <Button type="primary" className="p-2 hover:opacity-70">
                Manage Video
              </Button>
            </Link>
          ) : (
            <SubscribeButton channelId={channel.id} />
          )}
        </div>
      </div>
      {/* <div className="flex justify-center items-center w-full">
        <LikeDisLikePage video={video} />
      </div> */}
    </>
  );
};

export default LikeSubscribePage;
