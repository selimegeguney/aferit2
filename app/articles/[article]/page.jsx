import ArticleContainer from "@/containers/ArticleContainer"
import React from "react"

const Article = ({ params }) => {
  return <ArticleContainer articleId={params.article} />
}

export default Article
