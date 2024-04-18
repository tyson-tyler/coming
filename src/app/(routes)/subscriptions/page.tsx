import getSubscriptionVideos from "@/actions/getSubscriptionVideo";
import SubscriptionList from "@/components/subscription/Subscription";
import React from "react";

export default async function Subscription() {
  const subscriptionVideos = await getSubscriptionVideos();

  return subscriptionVideos.length ? (
    <SubscriptionList videos={subscriptionVideos} />
  ) : (
    <div className="flex justify-center items-center w-full h-screen">
      <h1 className="text-md usespan">No Video</h1>
    </div>
  );
}
