import getCurrentSubscription from "@/actions/getCurrentSubscriptions";
import getTreadingVideo from "@/actions/getTreadingVideo";
import LeftBar from "@/components/Leftbar";
import VideoCard from "@/components/shared/VideoCard";

export default async function Home() {
  const subscriptions = await getCurrentSubscription();
  const trendingVideos = await getTreadingVideo();
  return (
    <div className="w-full relative  mt-16 flex justify-center">
      <div className="sm:hidden md:flex flex flex-between md:mr-4">
        <LeftBar subscribedChannels={subscriptions} />
      </div>
      <div className="basis-[85%] mb-[100px] lg:mb-[0px] gap-x-10 gap-y-10 mt-5 justify-center grid-container">
        {trendingVideos
          ? trendingVideos.map((trendingVideo) => {
              return (
                <VideoCard
                  key={trendingVideo.id}
                  video={trendingVideo}
                  channel={trendingVideo.channel}
                  channelAvatar={trendingVideo.thumbnailSrc}
                />
              );
            })
          : "No Video"}
      </div>
    </div>
  );
}
