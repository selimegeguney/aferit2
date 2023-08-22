import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import React from "react"
import PostsListItem from "./PostsListItem"
export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <div className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white/90">Blog</h2>
      <ul className="w-min mx-auto">
        {posts.map((post, index) => (
          <PostsListItem key={index} post={post} />
        ))}
      </ul>
    </div>
  )
}
