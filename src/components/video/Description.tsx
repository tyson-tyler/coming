"use client";

import { compactNumberFormat } from "@/utils/numUtils";
import { Video } from "@prisma/client";
import dayjs from "@/vendor/devjs";
import { useState } from "react";

interface DescriptionProps {
  video: Video;
}
const Description: React.FC<DescriptionProps> = ({ video }) => {
  const [isExpanded, setIsExpand] = useState(false);
  return (
    <div
      className={`dark:bg-gray-800 mt-3 shadow-lg  rounded-xl p-3 dark:text-white overflow-hidden ${
        isExpanded ? "h-fit" : "line-clamp-2 max-h-28"
      }`}
    >
      <div className="flex gap-2 text-xl  dark:text-white text-black font-medium">
        <p>{compactNumberFormat(video.viewCount)} watch</p>
        <p>{dayjs(video.createdAt).format("D, MM, YYYY")}</p>
      </div>
      <div className={isExpanded ? "" : "line-clamp-2"}>
        <div className="whitespace-pre-line text-sm mt-2 text-gray-600">
          {video.description.split("/n").map((line, index) => {
            return line === "" ? <br key={index} /> : <p key={index}>{line}</p>;
          })}
        </div>
      </div>
      <p
        onClick={() => {
          setIsExpand((isExpanded) => !isExpanded);
        }}
        className={`cursor-pointer text-sm ${isExpanded ? "mt-2" : ""}`}
      >
        {isExpanded ? "Show less" : "Read more..."}
      </p>
    </div>
  );
};

export default Description;
