import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "blogposts")

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    // console.log(id)
    const fullPath = path.join(postsDirectory, fileName)
    // console.log(fullPath)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)

    const blogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }
    return blogPost
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getSinglePostData(article) {
  const fileNames = fs.readdirSync(postsDirectory)
  const fileName = fileNames.find(
    (file) => file.replace(/\.md$/, "") === article
  )
}
