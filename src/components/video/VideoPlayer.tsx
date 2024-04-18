"use client";
interface VideoPlayerProps {
  videoSrc: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="relative w-full mt-8 flex justify-center m-auto group dark:bg-black">
      <div className={`dark:text-white text-black z-40`}>
        <video
          src={videoSrc}
          className="aspect-video z-[5]  lg:h-[600px] md:h-[500px] sm:h-[400px] h-[350px] w-full"
          controls
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
