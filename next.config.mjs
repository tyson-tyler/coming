import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
};

export default withNextVideo(nextConfig);