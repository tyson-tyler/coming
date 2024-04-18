import getChannelById from "@/actions/getChannelById";
import getVideosByChannelId from "@/actions/getVideosByChannelId";
import ChannelHeader from "@/components/channel/ChannelHeader";
import VideoCard from "@/components/shared/VideoCard";
import VideoTrack from "@/components/videotrack";

interface ChannelPageProps {
  channelId: string;
}

export default async function ChannelPage({
  params,
}: {
  params: ChannelPageProps;
}) {
  const { channelId } = params;
  const channel = await getChannelById({ channelId });
  const videos = await getVideosByChannelId({ channelId });
  return channel ? (
    <>
      <div className="flex flex-col">
        <ChannelHeader channel={channel} videoCount={videos.length} />
        <div className=" border-b-2 border-b-gray-500">
          <div className="text-center  py-2 w-full mx-auto border-b-neutral-200">
            Videos
          </div>
        </div>
      </div>
      <div className="py-6 px-6 gap-4 flex flex-wrap justify-center items-center">
        {videos.map((video) => (
          <VideoTrack key={video.id} video={video} />
        ))}
      </div>
    </>
  ) : (
    <h1>Channel not found</h1>
  );
}
