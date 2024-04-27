import getChannelById from "@/actions/getChannelById";
import getCommentsByVideoId from "@/actions/getCommentsByVideoId";
import { getRecommendedVideos } from "@/actions/getRecommendedVideos";
import increaseVideoViewCount from "@/actions/increaseVideoViewCount";
import VideoCard from "@/components/shared/VideoCard";
import CommentSection from "@/components/video/CommentSection/CommentSection";
import Description from "@/components/video/Description";
import LikeSubscribePage from "@/components/video/LikeSubscribePage/LikeSubscribePage";
import VideoPlayer from "@/components/video/VideoPlayer";
import { Metadata } from "next";

interface VideoPageProps {
  videoId?: string;
}

export async function generateMetadata({
  params,
}: {
  params: VideoPageProps;
}): Promise<Metadata> {
  const { videoId } = params;
  const video = await increaseVideoViewCount({ videoId });

  return {
    title: video?.title,
  };
}

export default async function VideoPage({
  params,
}: {
  params: VideoPageProps;
}) {
  const { videoId } = params;

  const video = await increaseVideoViewCount({ videoId });
  const channel = await getChannelById({ channelId: video?.channelId });
  const comments = await getCommentsByVideoId({
    videoId,
  });
  const recommendedVideos = await getRecommendedVideos({ video });
  return video && channel && comments ? (
    <div className="flex flex-col  sm:mx-6 gap-4 mb-[100px] mt-10">
      <div className="w-full flex flex-col gap-4">
        <VideoPlayer videoSrc={video.videoSrc} />
        <div className="mx-2">
          <LikeSubscribePage video={video} channel={channel} />
          <h1 className="text-2xl my-2 pb-2 font-semibold break-all dark:text-white text-black">
            {video.title}
            <Description video={video} />
          </h1>

          <div className="w-full grid-container gap-4 pb-4">
            {recommendedVideos
              ? recommendedVideos.map((recommendedVideo) => {
                  return (
                    <VideoCard
                      key={recommendedVideo.id}
                      isVertical={false}
                      video={recommendedVideo}
                      channel={recommendedVideo.channel}
                      channelAvatar={channel.imageSrc}
                    />
                  );
                })
              : null}
          </div>
          <CommentSection comments={comments} videoId={video.id} />
        </div>
      </div>
    </div>
  ) : (
    <h1>video not found</h1>
  );
}
