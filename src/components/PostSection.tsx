import useSWR from "swr";
import { getPosts } from "../api/post";
import { SkeletonCard } from "./Skeleton";
import { PostCard } from "./PostCard";
import { useSearchParams } from "next/navigation";
import { QueryParams } from "../utils/params";
import { toast } from "sonner";

export default function PostSection() {
  const searchParams = useSearchParams();
  const userId = searchParams.get(QueryParams.USER_ID);
  const searchQuery = searchParams.get(QueryParams.SEARCH)?.toLowerCase() || "";

  const fetchUrl = userId ? `/posts?userId=${userId}` : "/posts";

  // I am not being able to test the timeout and onLoadingSlow properly but
  // I believe that 2 seconds is too much for most connections.
  const { data, error, isLoading } = useSWR(fetchUrl, getPosts, {
    revalidateOnReconnect: true,
    refreshInterval: 0,
    loadingTimeout: 2000,
    onLoadingSlow: () => {
      toast.warning("The connection is slow...");
    },
  });

  const filteredData = data?.filter((post) =>
    post.title.toLowerCase().includes(searchQuery),
  );
  5;
  if (error) return <div>Error loading posts.</div>;

  return (
    <section className="grid grid-cols-1 gap-6 w-4/5">
      {isLoading ? (
        <div className="grid gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <>
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="text-gray-500 italic">
              No posts found matching your search.
            </div>
          )}
        </>
      )}
    </section>
  );
}
