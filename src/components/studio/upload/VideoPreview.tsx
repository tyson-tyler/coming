"use client";

import Button from "@/components/shared/Button";
import { CheckCircle, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface VideoPreviewProps {
  videoId: string;
  videoSrc: string;
}
const VideoPreview: React.FC<VideoPreviewProps> = ({ videoId, videoSrc }) => {
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    setVideoLink(`${window.location.host}/video/${videoId}`);
  }, [videoId]);

  const copyLink = () => {
    navigator.clipboard
      .writeText(videoLink)
      .then(() => toast.success("Link is Copied"));
  };
  return (
    <div className="w-full md:w-2/5 flex flex-col rounded-md mb-10">
      <div className="dark:bg-gray-800 dark:text-white p-4 rounded-md flex justify-between items-center">
        <div className="w-full truncate">
          <div className="text-sm text-gray-400">Video Link</div>
          <div className="flex justify-center items-center w-full flex-col">
            <CheckCircle className="text-green-500 w-10 h-10" />
            <span className="text-md usespan font-bold text-center w-full">
              Video Upload
            </span>
          </div>
          <a href={videoLink} className="text-sm text-purple-600">
            {videoLink}
          </a>

          <Button
            type={"secondary"}
            className="hover:opacity-75 p-4"
            onClick={copyLink}
          >
            <Copy className="cursor-pointer" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
