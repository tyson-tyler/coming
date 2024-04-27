import getCurrentChannel from "@/actions/getCurrentChannel";
import getVideosByChannelId from "@/actions/getVideosByChannelId";
import AnalayticSummary from "@/components/studio/AnalayticSummary";
import VideoDetailCard from "@/components/studio/VideoDetailCard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Studio",
  },
};

const page = async () => {
  const currentChannel = await getCurrentChannel();
  const videos = await getVideosByChannelId({ channelId: currentChannel?.id });
  return (
    <div className="w-full">
      <div className="flex flex-col w-full h-full p-8">
        <AnalayticSummary videos={videos} />
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-2xl text-center font-semibold">Videos</h2>
          <div className="py-5 grid-container">
            {videos.length
              ? videos.map((video) => {
                  return <VideoDetailCard key={video.id} video={video} />;
                })
              : "there is No Video"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
