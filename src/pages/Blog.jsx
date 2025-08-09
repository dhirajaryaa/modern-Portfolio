import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import BlogCard from "../components/BlogCard";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const api = "https://dev.to/api/articles?username=dhirajarya01";

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [api]);

  return (
    <section className="flex flex-col gap-2 my-5 px-3">
      <h1 className="text-lg sm:text-xl font-semibold">my blog 📃:</h1>
      {loading ? (
        <div className="flex items-center gap-2 justify-center h-[25vh]">
          <FaSpinner className="animate-spin text-blue-600 text-" />
          <span>Loading...</span>
        </div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)
      ) : (
        <p className="text-sm my-16 text-center">⚠️ No Blog Posts.</p>
      )}
    </section>
  );
}

export default Blog;
