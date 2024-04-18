"use client";

import UseSubscribe from "@/hooks/useSubscribe";
import Button from "./shared/Button";
interface SubscribeButtonProps {
  channelId: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ channelId }) => {
  const { hasSubcribed, toogleSubscribed } = UseSubscribe({ channelId });
  return (
    <Button
      type={hasSubcribed ? "secondary" : "primary"}
      onClick={toogleSubscribed}
      className="p-2 hover:opacity-75"
    >
      {hasSubcribed ? "Followed" : "Follow"}
    </Button>
  );
};
export default SubscribeButton;
