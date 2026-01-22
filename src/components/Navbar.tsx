import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { QueryParams } from "../utils/params";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [userId, setUserId] = useState(searchParams.get(QueryParams.USER_ID));
  const [search, setSearch] = useState(searchParams.get(QueryParams.SEARCH));

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (userId) {
        params.set(QueryParams.USER_ID, userId);
      } else params.delete(QueryParams.USER_ID);

      if (search) {
        params.set(QueryParams.SEARCH, search);
      } else params.delete(QueryParams.SEARCH);

      params.set(QueryParams.PAGE, "1");

      router.push(`${pathname}?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [userId, search, pathname, router]);

  return (
    <header className="flex sticky flex-col md:flex-row justify-between items-start md:items-center top-0 bg-black w-full md:w-4/5 shadow-md py-3 md:py-4 mb-4 px-4 md:px-0 gap-3 md:gap-0">
      <h1 className="text-xl md:text-3xl font-bold">List of posts</h1>
      <div className="[&>input]:w-full flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto [&>input]:mt-2 [&>input]:p-2 [&>input]:border-gray-300 [&>input]:border-b [&>input]:outline-none">
        <input
          type="number"
          placeholder="User ID"
          className="md:w-24"
          value={userId ?? ""}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="search"
          placeholder="Search posts..."
          className="md:w-auto"
          value={search ?? ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};
