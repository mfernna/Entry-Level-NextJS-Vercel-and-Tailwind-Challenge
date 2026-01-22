import useSWR from "swr";
import { getPosts } from "../api/post";
import { SkeletonCard } from "./Skeleton";
import { PostCard } from "./PostCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { QueryParams } from "../utils/params";
import { toast } from "sonner";
import { PAGE_LIMIT } from "../utils/shared.consts";

export default function PostSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = Number(searchParams.get("page")) || 1;
  const userId = searchParams.get(QueryParams.USER_ID);
  const searchQuery = searchParams.get(QueryParams.SEARCH)?.toLowerCase() || "";

  let fetchUrl = `/posts?_page=${page}&_limit=${PAGE_LIMIT}`;

  if (userId) fetchUrl += `&userId=${userId}`;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

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

  if (error) return <div>Error loading posts.</div>;

  return (
    <section className="grid grid-cols-1 gap-4 md:gap-6 w-full md:w-4/5 px-4 md:px-0">
      {isLoading ? (
        <div className="grid gap-4 md:gap-6">
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
      <div
        className="flex justify-center gap-4 mt-8 
        [&>button]:hover:cursor-pointer 
        [&>button]:disabled:opacity-50 
        [&>button]:disabled:hover:cursor-not-allowed 
        [&>button]:rounded
      [&>button]:bg-gray-200
        [&>button]:px-3
        [&>button]:py-2
        [&>button]:text-black
        [&>button]:font-medium
        "
      >
        <button onClick={() => changePage(page - 1)} disabled={page === 1}>
          back
        </button>
        <span className="flex items-center">Page {page}</span>
        <button
          onClick={() => changePage(page + 1)}
          disabled={
            !data || data.length < PAGE_LIMIT || filteredData?.length === 0
          }
        >
          next
        </button>
      </div>
    </section>
  );
}
