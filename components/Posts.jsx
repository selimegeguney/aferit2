import React from "react"

import { getSortedPostsData } from "@/lib/posts"
import PostsListItem from "./PostsListItem"

export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <div className="mt-2 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white/90 mb-3">Blog</h2>
      <ul className="w-min mx-auto">
        {posts.map((post, index) => (
          <PostsListItem key={index} post={post} />
        ))}
      </ul>
    </div>
  )
}
