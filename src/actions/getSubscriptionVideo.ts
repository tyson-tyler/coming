import { Channel, Video } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";
import prisma from "@/vendor/db";

export default async function getSubscriptionVideos(): Promise<
  (Video & { channel: Channel })[]
> {
  const currentUser = await getCurrentUser();

  try {
    if (!currentUser?.subscribedChannelIds) {
      throw new Error("User's subscribedChannelIds is not defined.");
    }

    const videos = await prisma.video.findMany({
      where: {
        channelId: {
          in: currentUser.subscribedChannelIds,
        },
      },
      include: {
        Channel: true,
      },
      orderBy: [{ createdAt: "desc" }],
    });

    return videos;
  } catch (error: any) {
    console.log(error);
    throw error; // Re-throw the error for the caller to handle
  }
}
