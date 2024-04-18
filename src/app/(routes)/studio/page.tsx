import getCurrentChannel from "@/actions/getCurrentChannel";
import getVideosByChannelId from "@/actions/getVideosByChannelId";
import AnalayticSummary from "@/components/studio/AnalayticSummary";
import VideoDetailCard from "@/components/studio/VideoDetailCard";
import VideoTrack from "@/components/videotrack";
import React from "react";

const page = async () => {
  const currentChannel = await getCurrentChannel();
  const videos = await getVideosByChannelId({ channelId: currentChannel?.id });
  return (
    <div className="flex flex-col w-full h-full p-8">
      <AnalayticSummary videos={videos} />
      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl text-center">Videos</h2>
        <div className="basis-[85%] sm:mb-[100px] lg:mb-[0px] gap-x-10 gap-y-10 mt-5 justify-center grid-container">
          {videos.length
            ? videos.map((video) => {
                return <VideoDetailCard key={video.id} video={video} />;
              })
            : "there is No Video"}
        </div>
      </div>
    </div>
  );
};

export default page;
