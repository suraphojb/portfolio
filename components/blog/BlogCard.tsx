import Link from "next/link"
import { Tag } from "@/components/ui/Tag"
import type { BlogPost } from "@/types"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 h-full"
    >
      {/* Cover image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 flex items-center justify-center">
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.coverImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl text-indigo-200 dark:text-indigo-800 font-serif italic select-none">
            {post.title.charAt(0)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <Tag key={tag} label={tag} variant="indigo" />
            ))}
          </div>
        )}

        <h3 className="font-serif text-base font-normal text-zinc-900 dark:text-zinc-50 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 flex-1">
          {post.description}
        </p>

        <div className="flex items-center gap-2 mt-auto pt-2 text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={post.publishedAt}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </Link>
  )
}
