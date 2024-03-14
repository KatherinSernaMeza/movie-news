// blog/index.js
import { async } from "@agility/content-fetch";
import postsData from "posts.json";

export default function Blog() {
  const posts = postsData.posts;

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();
  }, []);

  return (
    <main className={`pb-14 mt-28 max-w-[800px] mx-auto`}>
      <ul className={"grid grid-cols-3 gap-x-4 gap-y-8 items-center"}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className={
                "block bg-white rounded-md shadow-md transition-all hover:scale-125"
              }
            >
              <span className={"px-5 pb-6 mt-5 block font-medium capitalize"}>
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
