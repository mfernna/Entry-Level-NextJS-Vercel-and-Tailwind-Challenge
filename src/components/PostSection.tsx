import useSWR from "swr";
import { getPosts } from "../api/post";
import { SkeletonCard } from "./Skeleton";
import { PostCard } from "./PostCard";

export default function PostSection() {
  const { data, error, isLoading } = useSWR("/posts", getPosts, {
    revalidateOnReconnect: true,
    refreshInterval: 0,
  });

  return (
    <section className="grid grid-cols-1 gap-6 w-4/5">
      {isLoading ? (
        <div className="grid gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        data?.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </section>
  );
}
