import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiBookOpen,
  FiClock,
} from "react-icons/fi";
import { getPosts } from "../lib/api";

export function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-[#232329]">
      <div
        className={`h-2 bg-gradient-to-r ${post.accent || "from-cyan-500 to-blue-600"}`}
      />
      <div className="flex min-h-72 flex-col p-7">
        <div className="mb-6 flex items-center justify-between gap-3 text-sm">
          <span className="rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent">
            {post.category}
          </span>
          <span className="text-right text-gray-500 dark:text-gray-400">
            {formatDate(post.publishedAt)}
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-snug text-primary dark:text-white">
          {post.title}
        </h2>
        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-7 text-sm font-medium text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <FiClock /> {post.readTime}
          </span>
          <Link
            to={`/blog/${post.id || post._id}`}
            className="flex items-center gap-1 text-accent transition group-hover:gap-2"
          >
            Read note <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Blog({ embedded = false }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <section
      id={embedded ? "blog" : undefined}
      className={
        embedded
          ? "scroll-mt-20 bg-gray-50 py-20 dark:bg-[#17171c] md:py-28"
          : "min-h-screen bg-white pb-20 pt-32 dark:bg-primary"
      }
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 flex items-center gap-2 font-mono text-accent">
            <FiBookOpen /> Notes from my desk
          </p>
          <h1 className="mb-5 text-4xl font-bold text-primary dark:text-white md:text-6xl">
            The blog<span className="text-accent">.</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Thoughts on web development, learning, and building useful digital
            experiences.
          </p>
          {embedded && (
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition hover:gap-3"
            >
              View all notes <FiArrowUpRight />
            </Link>
          )}
        </div>
        {posts.length ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(embedded ? posts.slice(0, 3) : posts).map((post) => (
              <BlogCard key={post.id || post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-72 animate-pulse rounded-2xl bg-gray-100 dark:bg-[#232329]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function BlogDetail() {
  const [posts, setPosts] = useState([]);
  const { postId } = useParams();
  const post = posts.find((item) => String(item.id || item._id) === postId);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  if (!posts.length)
    return (
      <main className="min-h-screen bg-white pt-32 dark:bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-96 animate-pulse rounded-3xl bg-gray-100 dark:bg-[#232329]" />
        </div>
      </main>
    );
  if (!post)
    return (
      <main className="min-h-screen bg-white pt-32 dark:bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl text-primary dark:text-white">
            Post not found<span className="text-accent">.</span>
          </h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-accent"
          >
            <FiArrowLeft /> Back to blog
          </Link>
        </div>
      </main>
    );

  const paragraphs = Array.isArray(post.content)
    ? post.content
    : String(post.content || "")
        .split("\n")
        .filter(Boolean);
  return (
    <main className="min-h-screen bg-white pb-24 pt-32 dark:bg-primary">
      <article className="container mx-auto max-w-4xl px-4 lg:px-8">
        <Link
          to="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:-translate-x-1"
        >
          <FiArrowLeft /> Back to blog
        </Link>
        <div
          className={`mb-8 h-2 rounded-full bg-gradient-to-r ${post.accent || "from-cyan-500 to-blue-600"}`}
        />
        <div className="mb-7 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent">
            {post.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {formatDate(post.publishedAt)}
          </span>
          <span className="text-gray-500 dark:text-gray-400">•</span>
          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <FiClock /> {post.readTime}
          </span>
        </div>
        <h1 className="max-w-3xl text-4xl leading-tight text-primary dark:text-white md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          {post.excerpt}
        </p>
        <div className="mt-12 space-y-7 text-lg leading-8 text-gray-700 dark:text-gray-300">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

export default Blog;
