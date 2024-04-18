"use client";

import { useProtectedRoute } from "@/hooks/useProtectedRoutes";
import { Channel, Video } from "@prisma/client";
import VideoCard from "../shared/VideoCard";

interface SubscriptionListProps {
  videos: (Video & { channel: Channel })[];
}

const SubscriptionList: React.FC<SubscriptionListProps> = ({ videos }) => {
  useProtectedRoute({ checkChannel: false });

  return (
    <div className="mx-12 sm:mx-24 py-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          channel={video.channel}
          channelAvatar
        />
      ))}
    </div>
  );
};
export default SubscriptionList;
