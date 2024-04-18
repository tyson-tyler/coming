"use client";

import { CurrentChannelContext } from "@/context/CreateChannelContext";
import { useProtectedRoute } from "@/hooks/useProtectedRoutes";
import { Video } from "@prisma/client";
import { useContext, useMemo } from "react";
import Avatar, { AvatarSize } from "../Avatar";
import AnalayticSummaryItem from "./AnalayticSummaryItem";
import { compactNumberFormat } from "@/utils/numUtils";

interface AnalayticSummaryProps {
  videos: Video[];
}

const AnalayticSummary: React.FC<AnalayticSummaryProps> = ({ videos }) => {
  useProtectedRoute();

  const currentChannel = useContext(CurrentChannelContext);

  const viewCount = useMemo(
    () =>
      videos?.reduce((totalViews, video) => totalViews + video.viewCount, 0),
    [videos]
  );
  return (
    <>
      {" "}
      <Avatar
        size={AvatarSize.large}
        imageSrc={currentChannel?.imageSrc}
        className="m-auto mt-[50px] mb-[30px]"
      />
      <div className="mx-auto flex items-center gap-4">
        <div className="flex justify-center">
          <AnalayticSummaryItem
            value={currentChannel?.name}
            subtitle={`@${currentChannel?.handle}`}
          />
          <AnalayticSummaryItem
            value={compactNumberFormat(currentChannel?.subscriberCount)}
            subtitle="Followers"
          />
          <AnalayticSummaryItem
            value={compactNumberFormat(viewCount)}
            subtitle="Watcher"
          />
          <AnalayticSummaryItem
            value={compactNumberFormat(videos.length)}
            subtitle="Videos"
          />
        </div>
      </div>
    </>
  );
};

export default AnalayticSummary;
