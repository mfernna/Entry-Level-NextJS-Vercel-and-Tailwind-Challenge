import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { QueryParams } from "../utils/params";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (key: string, val: string) => {
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set(key, val);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params}`);
  };

  return (
    <header className="flex sticky flex-row justify-between items-center top-0 bg-black w-4/5 shadow-md py-4 mb-4">
      <h1 className="text-2xl font-bold">List of posts</h1>
      <div className="flex gap-4 [&>input]:mt-2 [&>input]:p-2 [&>input]:border-gray-300 [&>input]:border-b [&>input]:outline-none">
        <input
          type="number"
          placeholder={QueryParams.USER_ID}
          className="w-20"
          onChange={(e) => handleSearch(QueryParams.USER_ID, e.target.value)}
          defaultValue={searchParams.get(QueryParams.USER_ID)?.toString()}
        />
        <input
          type="search"
          placeholder="Search posts..."
          onChange={(e) => handleSearch(QueryParams.SEARCH, e.target.value)}
          defaultValue={searchParams.get(QueryParams.SEARCH)?.toString()}
        />
      </div>
    </header>
  );
};
