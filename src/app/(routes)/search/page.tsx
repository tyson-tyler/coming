"use client";
import VideoCard from "@/components/shared/VideoCard";
import { Channel, Video } from "@prisma/client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SearchPage() {
  const params = useSearchParams();
  const searchQuery = params.get("searchQuery");

  const [videos, setVideos] = useState<(Video & { channel: Channel })[]>([]);

  useEffect(() => {
    axios
      .get("/api/videos", { params: { searchQuery } })
      .then((data) => {
        setVideos(data.data as unknown as (Video & { channel: Channel })[]);
      })
      .catch(() => toast.error("No Result found"));
  }, [searchQuery]);

  return (
    <div className="w-full relative mt-16 flex justify-center">
      <div className="basis-[85%] sm:mb-[100px] lg:mb-[0px] gap-x-10 gap-y-10 mt-5 justify-center grid-container w-full">
        {videos.length
          ? videos.map((video) => {
              return (
                <VideoCard
                  key={video.id}
                  isVertical={false}
                  video={video}
                  channel={video.channel}
                  includeDescription
                  channelAvatar
                />
              );
            })
          : "No video found"}
      </div>
    </div>
  );
}
