export const Navbar = () => {
  return (
    <header className="flex sticky flex-row justify-between items-center top-0 bg-black w-4/5 shadow-md py-4 mb-4">
      <h1 className="text-2xl font-bold">List of posts</h1>
      <input
        type="search"
        placeholder="Search posts..."
        className="mt-2 p-2 border border-gray-300 rounded-md"
      />
    </header>
  );
};
