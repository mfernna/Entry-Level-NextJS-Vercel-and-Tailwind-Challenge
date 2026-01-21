import { Post } from "../types/post";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({
  post: { userId, id, title, body },
}: PostCardProps) => {
  return (
    <div className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300 group">
      <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-md border border-blue-100 uppercase tracking-wider">
          User #{userId}
        </span>
        <span className="text-xs text-gray-400 font-mono">ID: {id}</span>
      </div>
      <h2 className="mb-2 text-xl font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="grow text-gray-600 text-sm leading-relaxed">{body}</p>

      {/* TODO: Feature to view more details about the post and more posts from the user. */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-blue-500 font-medium text-sm cursor-pointer hover:underline">
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};
