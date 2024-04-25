import { CurrentUserContext } from "@/context/CurrentUserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useMemo } from "react";
import toast from "react-hot-toast";

interface UseLikeDisLikeProps {
  videoId: string;
}

export enum LikeDisLikeStatus {
  Liked = 1,
  Disliked = 2,
  None = 3,
}

export const useLikeDisLike = ({ videoId }: UseLikeDisLikeProps) => {
  const currentUser = useContext(CurrentUserContext);

  const router = useRouter();

  const likeDisLikeStatus = useMemo(() => {
    if (!currentUser || !videoId) return false;

    const likeVideoIds = currentUser.likedVideoIds;

    const dislikedVideoIds = currentUser.dislikedVideoIds;

    if (likeVideoIds.includes(videoId)) {
      return LikeDisLikeStatus.Liked;
    } else if (dislikedVideoIds.includes(videoId)) {
      return LikeDisLikeStatus.Disliked;
    } else {
      return LikeDisLikeStatus.None;
    }
  }, [currentUser, videoId]);

  const toggleLikeDisLike = useCallback(
    async (action: "like" | "dislike") => {
      if (!currentUser) {
        alert("please sign in First");
        return;
      } else if (!videoId) return;

      try {
        if (action === "like") {
          switch (likeDisLikeStatus) {
            case LikeDisLikeStatus.Liked:
              await axios
                .delete(`/api/videos/${videoId}/like`)
                .then(() => axios.post(`/api/videos/${videoId}/dislike`));
              break;
            case LikeDisLikeStatus.Disliked:
              await axios.delete(`/api/videos/${videoId}/dislike`);

              break;

            default:
              await axios.post(`/api/videos/${videoId}/dislike`);
              break;
          }
        }
        router.refresh();
        toast.success("Liked");
      } catch (error) {
        toast.error("there an problem");
      }
    },
    [currentUser, videoId, likeDisLikeStatus, router]
  );
  return {
    likeDisLikeStatus,
    toggleLikeDisLike,
  };
};
export default useLikeDisLike;
