"use client";

import { Video } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dayjs from "@/vendor/devjs";
import { compactNumberFormat } from "@/utils/numUtils";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";

interface VideoDetailCardProps {
  video: Video;
}
const VideoDetailCard: React.FC<VideoDetailCardProps> = ({ video }) => {
  const router = useRouter();

  const handleDeleteVideo = useCallback(() => {
    if (confirm("Are you want to delete the video")) {
      axios
        .delete(`/api/videos/${video.id}`)
        .then(() => {
          toast.success("Deleted Successfully");
          router.refresh();
        })
        .catch(() => toast.error("Video not found"));
    }
  }, [video.id]);
  return (
    <div className="m-auto block mt-3 mb-3">
      <div
        key={video.id}
        className="relative w-full flex justify-center md:h-[400px] lg:h-[500px] sm:h-[400px] max-w-96 h-[400px] aspect-video"
      >
        <Link href={`video/${video.id}`}>
          <Image
            className="object-cover hover:scale-105 rounded-md duration-150 transtion-all ease-in"
            alt="video-detail"
            src={video.thumbnailSrc}
            layout="fill"
          />
        </Link>
      </div>

      <div className="flex gap-x-5 mt-4 flex-col justify-center">
        <h3 className="font-semibold text-lg text-center">{video.title}</h3>
      </div>
      <div className="flex flex-col text-center">
        <p>{dayjs(video.createdAt).format("MM, D,YYYY")}</p>
        <p className="text-sm text-gray-400">Published</p>
      </div>
      <div className="flex flex-col text-center">
        <p>{compactNumberFormat(video.viewCount)}</p>
        <p className="text-sm text-gray-400">Watches</p>
      </div>
      <Trash
        className="text-red-500 hover:opacity-75 cursor-pointer text-center w-full"
        onClick={handleDeleteVideo}
      />
    </div>
  );
};

export default VideoDetailCard;
