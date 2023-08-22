import React from "react"
import Link from "next/link"

import getFormattedDate from "@/lib/getFormattedDate"
const PostsListItem = ({ post }) => {
  const date = getFormattedDate(post.date)
  return (
    <li className="text-white/75  hover:text-white w-min text-start whitespace-nowrap mb-4">
      <Link href={`/articles/${post.id}`} className="text-xl ">
        {post.title}
      </Link>
      <br />
      <span className="text-xs">{date}</span>
    </li>
  )
}

export default PostsListItem
