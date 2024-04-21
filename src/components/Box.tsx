// components/BoxCard.js
import React from "react";

const BoxCard = ({ imageUrl, heading, description }: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-b hover:border-sky-700 mr-5 transition hover:scale-105 cursor-pointer">
      <img
        src={imageUrl}
        alt={heading}
        className="w-full pt-6 h-[300px] object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default BoxCard;
