//pages/api/posts/index.js
import postsData from "posts.json";

export default function handler(req, res) {
  const posts = postsData.posts;
  res.status(200).json(posts);
}
