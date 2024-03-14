//blog/[slug].js
import { useRouter } from "next/router";

export default function PostItem() {
  const { query } = useRouter();
  const [post, setPost] = useState({});
  /*  useEffect(() => {
    if (query?.slug) {
      const post = postsData.posts.find((post) => query.slug === post.slug);
      setPost(post);
    }
  }, [query?.slug]);*/

  useEffect(async () => {
    const res = await fetch(`http://localhost:3000/api/posts/${query.slug}`);
    const post = await res.json();
  }, []);

  return (
    <main className={"pb-14 mt-28 max-w-[800px] mx-auto"}>
      <div
        className={
          "mt-10 border-b-2 pb-3 border-[#ccc] flex justify-between items-center"
        }
      >
        <h1 className={"font-bold text-3xl capitalize leading-relaxed"}>
          {post.title}
        </h1>
      </div>
      <div
        className={"blog-body mt-10"}
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </main>
  );
}
