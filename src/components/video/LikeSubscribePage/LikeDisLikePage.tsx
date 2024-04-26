"use client";

import useLikeDisLike, { LikeDisLikeStatus } from "@/hooks/useLikeDisLike";
import { compactNumberFormat } from "@/utils/numUtils";
import { Video } from "@prisma/client";
import { Heart, HeartCrack } from "lucide-react";

interface LikeDisLikePageProps {
  video: Video;
}
const LikeDisLikePage: React.FC<LikeDisLikePageProps> = ({ video }) => {
  const { likeDisLikeStatus, toggleLikeDisLike } = useLikeDisLike({
    videoId: video.id,
  });
  return (
    <div className="flex items-center gap-1 px-3 py-2 text-black dark:text-white font-medium">
      <button
        className="pr-3  flex items-center gap-4"
        onClick={() => toggleLikeDisLike("like")}
      >
        {likeDisLikeStatus === LikeDisLikeStatus.Liked ? (
          <Heart className="h-6 w-6" />
        ) : (
          <Heart className="h-6 w-6 text-red-600" />
        )}
        <p className="dark:text-white text-black">
          {compactNumberFormat(video.dislikeCount)}
        </p>
      </button>
    </div>
  );
};

export default LikeDisLikePage;
