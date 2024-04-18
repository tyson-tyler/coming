import { Channel, Video } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Avatar, { AvatarSize } from "../Avatar";
import { compactNumberFormat } from "@/utils/numUtils";
import dayjs from "@/vendor/devjs";

interface VideoCardProps {
  channel?: Channel;
  channelAvatar?: string;
  video: Video;
  includeDescription?: boolean;
  isVertical?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  channel,
  channelAvatar,
  video,
  includeDescription = false,
  isVertical = true,
}) => {
  return (
    <Link
      className="m-auto w-full block mt-13 mb-3"
      href={`/video/${video.id}`}
    >
      <div className="relative w-full flex justify-center md:h-[400px] lg:h-[550px] max-w-128 sm:h-[400px] h-[400px] aspect-video">
        <Image
          className="object-cover hover:scale-105 rounded-md max-w-[40rem] duration-150 transtion-all ease-in "
          src={video.thumbnailSrc}
          alt="thumatil"
          layout="fill"
        />
      </div>

      <div className="flex gap-x-5 mt-4 flex-col">
        <h3 className="font-semibold text-lg">{video.title}</h3>
        {channel ? (
          <div className="flex gap-2 items-center ">
            <Avatar size={AvatarSize.medium} imageSrc={channelAvatar} />

            <p className="text-gray-500 text-sm whitespace-nowrap">
              {channel.name}
            </p>
          </div>
        ) : null}
        <p className="text-gray-500 text-sm  mt-2 mb-1">
          {compactNumberFormat(video.viewCount)} watchs * {""}
          {dayjs(video.createdAt).fromNow()}
        </p>
        {includeDescription ? (
          <div className="whitespace-pre-line text-sm text-gray-500">
            {video.description.split("/n").map((line, index) => {
              return line === "" ? <br key={index} /> : <p>{line}</p>;
            })}
          </div>
        ) : null}
      </div>
    </Link>
  );
};
export default VideoCard;
