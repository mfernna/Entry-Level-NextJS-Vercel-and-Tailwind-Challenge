import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { QueryParams } from "../utils/params";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [userId, setUserId] = useState(searchParams.get(QueryParams.USER_ID));
  const [search, setSearch] = useState(searchParams.get(QueryParams.SEARCH));

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (userId) params.set(QueryParams.USER_ID, userId);
      else params.delete(QueryParams.USER_ID);

      if (search) params.set(QueryParams.SEARCH, search);
      else params.delete(QueryParams.SEARCH);

      router.push(`${pathname}?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [userId, search, pathname, router]);

  return (
    <header className="flex sticky flex-row justify-between items-center top-0 bg-black w-4/5 shadow-md py-4 mb-4">
      <h1 className="text-3xl font-bold">List of posts</h1>
      <div className="flex gap-4 [&>input]:mt-2 [&>input]:p-2 [&>input]:border-gray-300 [&>input]:border-b [&>input]:outline-none">
        <input
          type="number"
          placeholder="User ID"
          className="w-24"
          value={userId ?? ""}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="search"
          placeholder="Search posts..."
          value={search ?? ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};
