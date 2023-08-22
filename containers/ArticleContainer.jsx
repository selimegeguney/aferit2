import React from "react"

import { getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"
import getFormattedDate from "@/lib/getFormattedDate"

const ArticleContainer = async ({ articleId }) => {
  const posts = getSortedPostsData()

  if (!posts.find((post) => post.id === articleId)) {
    return notFound()
  }

  const { title, date, content } = await getPostData(articleId)
  const pubDate = getFormattedDate(date)
  return (
    <main className="w-3/4 mx-auto">
      <section className="my-10">
        <h2 className="text-start text-3xl">{title.toUpperCase()}</h2>
        <span>{pubDate}</span>
      </section>
      <section className="" dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  )
}

export default ArticleContainer
