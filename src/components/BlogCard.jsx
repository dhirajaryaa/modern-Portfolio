import { FaRegHeart, FaRegComment } from "react-icons/fa6";

function BlogCard({ blog }) {
  return (
    <a
      href={blog.url}
      target="_blank"
      className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg sm:rounded-xl"
    >
      <h2 className="font-semibold text-sm truncate">{blog.title}</h2>
      <div className="flex gap-2 items-center my-1 flex-wrap">
        {blog.tag_list?.map((tag) => (
          <span key={tag} className="text-xs text-violet-500">
            #{tag}
          </span>
        ))}
      </div>
      <p className="font-text text-[14px] opacity-70">{blog.description}</p>
      <div className="flex items-center justify-between py-2">
        <p className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1">
            <FaRegHeart className="text-rose-500 size-4" />{" "}
            {blog.positive_reactions_count}
          </span>
          <span className="flex items-center gap-1">
            <FaRegComment className="text-blue-500 size-4" />{" "}
            {blog.comments_count}
          </span>
        </p>
        <time
          dateTime={blog.published_at}
          className="w-fit text-nowrap font-base text-sm opacity-80 "
        >
          {new Date(blog.published_at).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>
    </a>
  );
}

export default BlogCard;
